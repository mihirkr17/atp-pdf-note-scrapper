const { constant } = require("../config");
const matchstats = require("../templates/matchstats");
const stevegtennis = require("../templates/stevegtennis");
const {
   createPostOfWP,
   getPostTagIdsOfWP,
   getMediaIdOfWP,
   checkExistingPostOfWP,
   downloadPDF,
   paraphraseContents
} = require("../services");


const { consoleLogger, extractMatchInfo,
   imgWrapper,
   delay,
   slugMaker,
   capitalizeFirstLetterOfEachWord,
   getSurnameOfPlayer
} = require("../utils");


const translate = (...args) =>
   import('translate').then(({ default: fetch }) => fetch(...args));

translate.engine = 'libre';
translate.key = process.env.LIBRE_TRANSLATE_KEY;



const sites = [
   {
      id: 1,
      siteName: "Stevegtennis",
      siteCode: "sg",
      siteDomain: constant?.domainSg,
      authToken: constant?.authTokenSg,
      authorId: constant?.authorIdSg,
      template: stevegtennis,
      chatgptCommand: "Rewrite this in #language, not adding extra facts that are not in this text, reply in paragraph form, in an interesting tennis journalistic manner with a long as possible reply: #texts"
   },
   {
      id: 2,
      siteName: "Matchstat",
      siteCode: "ms",
      siteDomain: constant?.domainMs,
      authToken: constant?.authTokenMs,
      authorId: constant?.authorIdMs,
      template: matchstats,
      chatgptCommand: 'With your reply in #language, including all facts in this text, rewrite "#texts"'
   }
];

async function init({ tournamentLocation = "", pdfLink = "", tournamentDay = "", tournamentName = "" }) {
   try {

      const pop = `[${tournamentName} - ${tournamentDay}]`;

      let postCounter = 0;
      const minContentCharacters = 800;

      // Download pdf by link and extracted contents by Pdf parser.
      const pdfNoteUrl = constant.pdfUri(pdfLink);

      consoleLogger(`Downloading pdf from ${pdfNoteUrl}...`);

      const pdfTexts = await downloadPDF(pdfNoteUrl);

      if (!pdfTexts || typeof pdfTexts !== "string" || pdfTexts.length < 0) {
         return { message: `${pop} Sorry no pdf text found.` }
      }

      consoleLogger(`${pop} PDF texts found. Extracting contents...`);

      // Extracting match details from pdf contents | basically it returns [Array];
      const contents = extractMatchInfo(pdfTexts, { tournamentName, tournamentLocation, tournamentDay });

      if (!Array.isArray(contents) || contents.length === 0) {
         return { message: `${pop} Sorry! No post content found.` };
      }

      consoleLogger(`Pdf downloaded and extracted contents successfully.`);

      for (const site of sites) {
         const { siteDomain, siteCode, siteName, template, chatgptCommand, authorId, authToken } = site;

         consoleLogger(`Total ${contents.length * template?.length} posts will create.`);
         try {

            // Basic wordpress authentication
            const token = authToken;

            if (!token) {
               consoleLogger(`Sorry! ${siteName} auth token not found.`);
            }

            consoleLogger(`${siteName} auth token found.`);

            for (const content of contents) {
               const playerOne = content?.player1;
               const playerTwo = content?.player2;
               const player1slug = content?.player1slug;
               const player2slug = content?.player2slug;
               const text = content?.content;
               const eventName = content?.eventName;
               const eventDate = content?.eventDate;
               const eventDay = content?.eventDay;
               const eventAddress = content?.eventAddress || tournamentLocation;
               const eventRound = content?.round || null;
               const eventHeadingTwo = content?.eventHeadingTwo;
               const leads = content?.leads;
               const playerOneSurname = getSurnameOfPlayer(playerOne);
               const playerTwoSurname = getSurnameOfPlayer(playerTwo);
               const eventYear = content?.eventYear;
               const plainEventName = eventName?.replace(/\d/g, '')?.trim();

               if (!playerOne || !playerTwo || !eventName) {
                  consoleLogger(`Some fields are missing.`);
                  continue;
               }

               if (text.length < minContentCharacters) {
                  consoleLogger(`S-${postCounter}. Post skipped due to content less than ${minContentCharacters} characters.`);
                  continue;
               }

               try {
                  let playerOneMedia = {}, playerTwoMedia = {};

                  playerOneMedia = await getMediaIdOfWP(constant.mediaUri(siteDomain, player1slug), token);
                  playerTwoMedia = await getMediaIdOfWP(constant.mediaUri(siteDomain, player2slug), token);

                  if (!playerOneMedia?.mediaId) {
                     playerOneMedia = await getMediaIdOfWP(constant.mediaUri(siteDomain, `generic${Math.floor(Math.random() * 10) + 1}`), token);
                  }

                  if (!playerTwoMedia?.mediaId) {
                     playerTwoMedia = await getMediaIdOfWP(constant.mediaUri(siteDomain, `generic${Math.floor(Math.random() * 10) + 1}`), token);
                  }


                  const imageWrapperHtml = imgWrapper([playerOneMedia, playerTwoMedia], playerOneSurname, playerTwoSurname, siteCode);


                  await Promise.all(template.map(async (resource) => {
                     try {
                        if (!resource?.categoryId || !resource?.category || !resource?.language || !resource?.eventTag) {
                           throw new Error("Something went wrong.");
                        }

                        const categoryId = resource?.categoryId;

                        // Creating tags
                        const playerOneTag = resource?.playerTag?.replace("#playerName", playerOne);
                        const playerTwoTag = resource?.playerTag?.replace("#playerName", playerTwo);
                        const playerVsPlayerTag = resource?.playerVsPlayerTag ?
                           resource?.playerVsPlayerTag?.replace("#playerOneSurname", playerOneSurname)?.replace("#playerTwoSurname", playerTwoSurname) : "";

                        const eventTag = resource?.eventTag?.replace("#eventName", siteCode === "sg" ? eventName : plainEventName);

                        const [eventHeadingTwoTranslate, eventAddressTranslate, eventDayTranslate, eventDateTranslate] = await Promise.all([
                           translate(eventHeadingTwo, { from: 'en', to: resource?.languageCode }),
                           translate(eventAddress, { from: 'en', to: resource?.languageCode }),
                           translate(eventDay, { from: 'en', to: resource?.languageCode }),
                           translate(eventDate, { from: 'en', to: resource?.languageCode }),
                        ]);

                        let newTitle = "";

                        if (siteCode === "sg") {
                           newTitle = resource?.title?.replace("#eventName", eventName)
                              ?.replace("#playerOne", playerOne)
                              ?.replace("#playerTwo", playerTwo)
                              ?.replace("#eventDate", eventDateTranslate);
                        }

                        if (siteCode === "ms") {
                           newTitle = resource?.title?.replace("#eventName", plainEventName)
                              ?.replace("#playerOneSurname", playerOneSurname)
                              ?.replace("#playerTwoSurname", playerTwoSurname)
                              ?.replace("#eventYear", eventYear);
                        }

                        // Capitalized first character of each words
                        let title = capitalizeFirstLetterOfEachWord(newTitle);
                        title = title?.replace("Atp", "ATP");
                        consoleLogger(`S-${postCounter}. Post Title: ${title}.`);
                        const slug = slugMaker(title);
                        consoleLogger(`S-${postCounter}. Post Slug: ${slug}.`);


                        // Checking exist post in the db
                        const isUniquePost = await checkExistingPostOfWP(constant?.postExistUri(siteDomain, slug), token);

                        if (isUniquePost) {
                           consoleLogger(`S-${postCounter}. Post already exists.`);
                           return;
                        }

                        consoleLogger(`S-${postCounter}. Post language: ${resource?.language}.`);
                        consoleLogger(`S-${postCounter}. Event Day: ${eventDay}.`);
                        consoleLogger(`S-${postCounter}. Tags are ${playerVsPlayerTag}, ${playerOneTag}, ${playerTwoTag}, ${eventTag} will create.`);

                        const tagIds = await getPostTagIdsOfWP(constant?.tagUri(siteDomain), [playerOneTag, playerTwoTag, eventTag, playerVsPlayerTag], token);

                        if (!Array.isArray(tagIds) || tagIds.length === 0) {
                           throw new Error(`S-${postCounter}. Tags are not created. Terminate the request.`);
                        }

                        consoleLogger(`S-${postCounter}. Tags generated. Tag Id's: ${tagIds}`);

                        consoleLogger(`S-${postCounter}. Paraphrase starting...`);
                        const paraphrasedBlog = await paraphraseContents(chatgptCommand?.replace("#language", resource?.language)?.replace("#texts", text));
                        consoleLogger(`S-${postCounter}. Paraphrased done.`);

                        const htmlContent = resource?.contents(
                           eventName,
                           leads,
                           eventAddressTranslate,
                           playerOne,
                           playerTwo,
                           eventDateTranslate,
                           eventHeadingTwoTranslate,
                           eventRound,
                           eventDayTranslate,
                           paraphrasedBlog,
                           player1slug,
                           player2slug,
                           imageWrapperHtml,
                           playerOneSurname,
                           playerTwoSurname,
                           eventYear, plainEventName);

                        consoleLogger(`S-${postCounter}. Post creating...`);
                        await createPostOfWP(constant?.postUri(siteDomain), token, {
                           title,
                           slug,
                           content: htmlContent,
                           status: constant?.postStatus,
                           author: parseInt(authorId),
                           tags: tagIds,
                           featured_media: playerOneMedia?.mediaId || playerTwoMedia?.mediaId,
                           categories: [categoryId]
                        });
                        consoleLogger(`S-${postCounter}. Post created successfully.`);

                        postCounter += 1;
                     } catch (error) {
                        consoleLogger(`S-${postCounter}. Error In Resource Model: ${error?.message}.`);
                        await delay(1000);
                     }
                  }));
               } catch (error) {
                  consoleLogger(`Error In Contents Model: ${error?.message}.`);
                  await delay(1000);
               }
            }

         } catch (error) {
            consoleLogger(`Error In ${siteName}: ${error?.message}.`);
            continue;
         }
      }



      return { message: `${postCounter >= 1 ? `Total ${postCounter} posts created.` : "No posts have been created."} Operation done.` };
   } catch (error) {
      throw new Error(`Error In Init: ${error?.message}`);
   }
};

module.exports = init;