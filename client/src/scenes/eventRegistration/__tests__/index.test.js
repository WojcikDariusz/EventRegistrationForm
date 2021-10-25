/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import  EventRegistration  from "../index";

//Integration test for how user may interact with the event register form

describe("Form Fields Validation", () => {
it("should validate form fields", async () => {

  render(<EventRegistration />);
  fireEvent.input(screen.getByPlaceholderText("* FIRST NAME"), {
    target: {
      value:
        "John"
    }
  });

  //Lack last name
  fireEvent.input(screen.getByPlaceholderText("* LAST NAME"), {
    target: {
      value:
        ""
    }
  });

  //Wrong email
  fireEvent.input(screen.getByPlaceholderText("* E-MAIL"), {
    target: {
      value:
        "John@domain"
    }
  });

  const datepicker = screen.getByPlaceholderText("* SELECT DATE AND TIME")
  fireEvent.mouseDown(datepicker);
  fireEvent.change(datepicker, { target: { value: "10-12-2020" } });

  fireEvent.click(screen.getByText("Register"));

  expect(screen.queryByText("First name is required")).not.toBeInTheDocument();
  expect(screen.queryByText("Last name is required")).toBeInTheDocument();
  expect(screen.queryByText("Invalid email adress")).toBeInTheDocument();
  expect(screen.queryByText("Event date is required")).not.toBeInTheDocument();
})
})

