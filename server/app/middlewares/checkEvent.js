/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

// Middleware functions for determining that user with email provided 
// in the request did not already registered an event with the same date.

const db = require("../models");
const Event = db.events;

const checkIfRequestIsUnique = (req, res, next) => {
  
    Event.findOne({
      email: req.body.email,
      eventdate: req.body.eventdate
    }).exec((err, event) => {

      if (err) {
        res.status(500).send({ message: "Error has occured. Refresh your browser."});
        return;
      }
  
      if (event) {
        res.status(400).send({ message: "This event already exists." });
        return;
      }
      next()
    });

  };

const checkEvent = {
     checkIfRequestIsUnique
  };
  
  module.exports = checkEvent;
  