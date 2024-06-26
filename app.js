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