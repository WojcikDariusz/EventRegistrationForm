/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const registerEvent = (firstname, lastname, email, eventdate) => {
  return axios.post(
    API_URL + "registerevent",
    { firstname, lastname, email, eventdate }
  );
};

export default {registerEvent};