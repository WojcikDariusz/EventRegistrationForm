/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

"use strict";

const { checkEvent } = require("../middlewares");
const controller = require("../controllers/event.controller");

module.exports = function (app) {
   app.post(
    "/api/registerevent",
    [
      checkEvent.checkIfRequestIsUnique
    ],
    controller.registerEvent
  );
};
