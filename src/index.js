const browserObject = require("./browser");
const scraperController = require("./pageController");
const mongoose = require("mongoose");
require("dotenv/config");

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

//connecting to the database
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.info("DB CONNECTED SUCCESSFULLY")
);

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
