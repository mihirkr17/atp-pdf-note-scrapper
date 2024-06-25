// const express = require("express");
// const cookieParser = require("cookie-parser");
// const schedule = require("node-schedule");
require("dotenv").config();



const {
   consoleLogger,
} = require("./utils");

// const path = require("path");
const init = require("./init");
const { constant } = require("./config");
const { getPdfLinks } = require("./services");




// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middlewares
// app.use(cookieParser());
// app.use(express.json());
// app.set({
//    origin: "*",
//    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
//    allowedHeaders: ["Content-Type", "Authorization", "role"],
//    credentials: true,
// });
// Serve static files from the "models" directory
// app.use(express.static(path.join(__dirname, 'models')));
// app.use(require("./routes/route"));


function dateChecker(dateRange) {
   // const dateRange = "2024.06.10-2024.06.16";

   // Split the date range into two separate date strings
   const [startDateStr, endDateStr] = dateRange.split('-');

   // Replace dots with hyphens to make the format parsable
   const startDate = new Date(startDateStr.replace(/\./g, '-'));
   const endDate = new Date(endDateStr.replace(/\./g, '-'));

   // Check if the dates are valid
   if (isNaN(startDate) || isNaN(endDate)) {
      return false;
   } else {
      // Get today's date
      const today = new Date();
      // Zero out the time portion for accurate comparison
      today.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      return today <= endDate;
   }
}

(async () => {
   try {
      if (!constant?.postStatus || !constant?.postStatusAll.includes(constant?.postStatus)) {
         throw new Error(`ERROR: Post status must be set as "POST_STATUS=publish or future or draft or pending or private" in .env`);
      }

      if (!constant?.authorIdSg || !(/[0-9]/g).test(constant?.authorIdSg) || !constant?.authorIdMs || !(/[0-9]/g).test(constant?.authorIdMs)) {
         throw new Error(`ERROR: Author id must be set as "AUTHOR_ID_SG=12345 | AUTHOR_ID_MS=12345" in .env`);
      }

      const sites = [
         {
            id: 1,
            siteName: "stevegtennis",
            nick: "sg",
            domain: constant?.domainSg,
            authToken: constant?.authTokenSg,
            authorId: constant?.authorIdSg,
            chatgptCommand: "Rewrite this in #language, not adding extra facts that are not in this text, reply in paragraph form, in an interesting tennis journalistic manner with a long as possible reply: #texts"
         },
         {
            id: 2,
            siteName: "matchstat",
            nick: "ms",
            domain: constant?.domainMs,
            authToken: constant?.authTokenMs,
            authorId: constant?.authorIdMs,
            chatgptCommand: 'With your reply in #language, including all facts in this text, rewrite "#texts"'
         }
      ];


      // Getting pdf first link
      let mediaNoteUrls = await getPdfLinks(constant?.atpNoteUri);
      mediaNoteUrls = mediaNoteUrls && mediaNoteUrls.filter(e => e);

      const lengthOfMediaNoteLinks = mediaNoteUrls.length || 0;

      if (lengthOfMediaNoteLinks <= 0) {
         consoleLogger(`Sorry no media note urls available right now!`);
         return;
      }

      for (const note of mediaNoteUrls) {

         const isValidDate = dateChecker(note?.tournamentDate);

         if (isValidDate) {
            const result = await init(note);
            consoleLogger(`${result?.message}`);
         }
      }

      return

      // Operation will run here
      for (const site of sites) {
         consoleLogger(`${site?.id}. Running ${site?.siteName}`);



      }



      // for (const note of mediaNoteUrls) {

      //    const isValidDate = dateChecker(note?.tournamentDate);
      //    const location = note?.tournamentLocation;
      //    const links = note?.pdfLinks;

      //    if (isValidDate && Array.isArray(links) && links.length >= 1) {

      //       // Operation will run here
      //       for (const site of sites) {
      //          consoleLogger(`${site?.id}. Running ${site?.siteName}`);
      //          const result = await init(site, links, location);

      //          consoleLogger(`${result?.message} for ${site?.siteName}`);
      //       }
      //    }
      // }


      // console.log(mediaNoteUrls);

      // return;

      // const lengthOfMediaNoteLinks = mediaNoteUrls.length || 0;

      // if (lengthOfMediaNoteLinks <= 0) {
      //    consoleLogger(`Sorry no media note urls available right now!`);
      //    return;
      // }

      // // changed
      // mediaNoteUrls = mediaNoteUrls.slice(0, 1);
      // // let mediaNoteUrls = ["/-/media/2c1974484f09488e8d9b510b14b9b69d.pdf"]


      // consoleLogger(`Found ${lengthOfMediaNoteLinks} media note urls.`);

      // for (const site of sites) {
      //    consoleLogger(`${site?.id}. Running ${site?.siteName}`);
      //    const result = await init(site, mediaNoteUrls);

      //    consoleLogger(`${result?.message} for ${site?.siteName}`);
      // }




      // return;
      // const result = await init();

      // consoleLogger(`${result?.message}`);


      // schedule.scheduleJob(scheduleJobTime, async function () {
      //    try {
      //       const isSchedule = constant?.scheduleAction === "ON" ? true : false;

      //       consoleLogger(`Function will run every ${scheduleTime} ${scheduleTimeLabel}.`);

      //       if (isSchedule) {
      //          const result = await init();
      //          consoleLogger(`${result?.message}`);
      //       } else {
      //          consoleLogger("Schedule off.");
      //       }
      //    } catch (error) {
      //       throw error;
      //    }
      // });

   } catch (error) {
      consoleLogger(error?.message);
   }
})();

// app.listen(PORT, async () => {
//    try {
//       consoleLogger(`PDF scrapper server running successfully on PORT: ${PORT}`);
//    } catch (error) {
//       consoleLogger(error?.message);
//    }
// });