/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

// Controller for handling event registration 
const AppConfig = require("../config/app.config");
const db = require("../models");
const Event = db.events;

exports.registerEvent = (req, res) => {
    const event = new Event({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      eventdate : req.body.eventdate,
    });
  
    event.save((err, event) => {
      if (err) {
        res.status(500).send({ message: "There was a problem with saving event. Try again later." });
      } else {
        res.status(200).send({ message: "Event registered in database with success!" });
      }
      });
  };
  