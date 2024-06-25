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
            const tournamentLocation = $(tournamentDetails).find(".location").text() || "";
            const tournamentDate = $(tournamentDetails).find("span.dates").text() || "";
            const tournamentName = $(tournamentDetails).find("h3 > a").text() || "";

            // Media Note urls...
            const mediaNotes = $(notes).find(".notes-documents > ul.daily-media-notes");
            const mNotes = $(mediaNotes).find("li");

            const pdfLinks = [];
            let largest = 0;

            mNotes.each((_, li) => {
               const title = $(li).find("span").text();
               const link = $(li).find("a").attr("href");

               if (title.match(/Media Notes/g)) {
                  const day = title && title.match(/Day \d+/gi)?.[0];
                  const dayInt = day && day.match(/\d+/)?.[0];
                  pdfLinks.push({ link, day, dayInt: parseInt(dayInt) })
               }
            })

            const lin = pdfLinks?.map(e => e.dayInt);

            const maxDayNumber = lin && Math.max(...lin);

            const newLink = pdfLinks && pdfLinks.find(e => maxDayNumber === e.dayInt);

            links.push({ tournamentLocation, tournamentDate, pdfLink: newLink?.link, tournamentDay: newLink?.day, tournamentName });

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