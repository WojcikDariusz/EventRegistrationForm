/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

// Load required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Adding CORS verification
const appConfig = require("./app/config/app.config.js");

let corsOrigin = {
  origin: `http://${appConfig.HOST}:${appConfig.ORIGIN_PORT}`
};
app.use(cors(corsOrigin));

// Load module responsible for routes handling
require("./app/routes/public.routes.js")(app);

// Load database models and config
const db = require("./app/models");
const dbConfig = require("./app/config/db.config.js");

// Connect to mongoDB
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //After resolving db.mongoosse.connect invoke the initial function
    console.log("Connection to mongoDB established.");
  })
  .catch((err) => {
    console.error("Connection error with mongoDB", err);
    //Terminate node.js app when connection to mongoDB error occurs
    process.exit();
  });

// Listen for incoming requests
const PORT = process.env.PORT || `${appConfig.PORT}`;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
