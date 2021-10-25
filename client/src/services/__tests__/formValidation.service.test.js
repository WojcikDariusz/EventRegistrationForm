/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import  Validators from "../formValidation.service";


describe("Validators", () => {
    it("should validate required form fields", () => {
        expect(Validators.required("")).toBe(false);
        expect(Validators.required("John")).toBe(true);
    });
    it("should validate email form field", () => {
        expect(Validators.email("aaa")).toBe(false);
        expect(Validators.email("aaa@domain")).toBe(false);
        expect(Validators.email("aaa@domain.com")).toBe(true);
    })
});
