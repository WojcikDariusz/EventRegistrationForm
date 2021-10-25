/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

  const required = (value) => {
    //Return true if there is at least one sign in the
    return !value.toString().trim().length ? false : true
  };

  const email = (value) => {
    //Validate email (value) against standard email patterns.
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(value).toLowerCase());
  };

 export default {required,email}