/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.events = require("./event.model");

module.exports = db;