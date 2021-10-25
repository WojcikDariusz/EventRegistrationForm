/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

// Handling the user model definition
const mongoose = require("mongoose");

const timeStamp = new Date().toISOString().split('T')[0];

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    eventdate : {type : Date} 
  })
);

module.exports = Event;