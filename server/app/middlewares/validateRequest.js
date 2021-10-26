/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

// Middleware functions for determining if request data is correct

const isRequired = (req, res, next) => {

    let eventDetails = ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        eventdate : req.body.eventdate,
      });

    let isCorrect = true;

    Object.values(eventDetails).map((value) => {
    
        if (value.toString().trim().length === 0) {
           isCorrect = false
        }
    })

    if (!isCorrect) {
        res.status(400).send({ message: "Incomplete data" });
        return
    } else {
      next()
    }
    
  };

const validateRequest = {
     isRequired
  };
  
  module.exports = validateRequest;
  