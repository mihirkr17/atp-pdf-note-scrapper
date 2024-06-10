const cheerio = require('cheerio');
const { httpsGetRequest, retryOperation } = require('../utils');

async function runCheerio(url) {
   return retryOperation(async () => {
      const data = await httpsGetRequest(url);

      if (!data) {
         throw new Error("No response from atp media notes.");
      }

      const $ = cheerio.load(data);

      const noteWrapper = $(".notes-wrapper");
      const links = [];

      if (noteWrapper) {
         noteWrapper.each((_, notes) => {

            // Tournament details... 
            const tournamentDetails = $(notes).find(".tournament-details > .details-holder > .details");
            const tournamentLocation = $(tournamentDetails).find(".location").text();
            const tournamentDate = $(tournamentDetails).find("span.dates").text();

            // Media Note urls...
            const mediaNotes = $(notes).find(".notes-documents > ul.daily-media-notes");
            const mNotes = $(mediaNotes).find("li");

            const pdfLinks = [];

            mNotes.each((_, li) => {
               const title = $(li).find("span").text();
               const link = $(li).find("a").attr("href");

               if (title.match(/Media Notes/g)) {
                  pdfLinks.push(link)
               }
            })

            links.push({ tournamentLocation, tournamentDate, pdfLinks });

            // const documents = $(notes).find(".notes-documents");
         })
      }

     return links;

      // const ul = $('ul.daily-media-notes li');

      // const links = [];

      // if (ul) {
      //    ul.each((_, pdf) => {
      //       const aLink = $(pdf).find("a").attr("href");
      //       const title = $(pdf).find("span").text();

      //       if (title.match(/Media Notes/g)) {
      //          links.push(aLink)
      //       }
      //    });
      //    return links;
      // }
   }, 50)();
}


module.exports = runCheerio