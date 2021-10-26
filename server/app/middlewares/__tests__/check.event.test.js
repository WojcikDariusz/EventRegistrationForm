/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

const app = require("../../../index");
const mongoose = require("mongoose");
const supertest = require("supertest");

const mockData = { firstname: "Test", lastname: "Test", email: "test@localhost.com", eventdate: "2021-10-25T15:00:00Z"};

beforeAll((done) => {
    mongoose.connect("mongodb://localhost:27017/brainhub",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  });
  
  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

 //First attemppt to POST data with the same email and eventdate
  test("POST /api/registerevent", async () => {
 
    supertest(app).post("/api/registerevent").send(mockData)
    .expect(200) 
    
  });

  //Second attemppt to POST data with the same email and eventdate
  test("POST /api/registerevent", async () => {
 
    supertest(app).post("/api/registerevent").send(mockData) 
    .expect(400)
 
 });



