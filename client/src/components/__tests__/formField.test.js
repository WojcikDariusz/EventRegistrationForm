/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import  FormField  from "../formField";


describe("Form Field", () => {
  it("should render the form field", () => {
    render(<FormField  />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});