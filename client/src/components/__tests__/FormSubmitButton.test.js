/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import  FormSubmitButton  from "../formSubmitButton";


describe("Form Submit Button", () => {
  it("should render the form field", () => {
    render(<FormSubmitButton text="Register" />);
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});