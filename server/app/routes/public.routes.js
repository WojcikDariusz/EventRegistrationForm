/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

const { validateRequest, checkEvent } = require("../middlewares");
const controller = require("../controllers/event.controller");

module.exports = function (app) {
   app.post(
    "/api/registerevent",
    [
      validateRequest.isRequired,
      checkEvent.checkIfRequestIsUnique
    ],
    controller.registerEvent
  );
};
