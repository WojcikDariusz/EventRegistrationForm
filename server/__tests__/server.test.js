/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

const app = require("../index");
const mongoose = require("mongoose");
const supertest = require("supertest");


  beforeAll((done) => {
    //Should be tested on separate database.
    mongoose.connect("mongodb://localhost:27017/brainhub",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  });
  
  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

  //Test POST request to /api/registerevent with valid data
  test("POST /api/registerevent", async () => {
    const validRequest = { firstname: 'John', lastname: 'Smith', email: 'johnsmithk@yahoo.com', eventdate: '2021-10-25T15:00:00Z'};
  
    await supertest(app).post("/api/registerevent").send(validRequest)

      .expect(200)
      .then((response) => {
        // Check response message
        expect(response.body.message).toEqual("Event registered in database with success!");
      });
  });

 //Test POST request to /api/registerevent with invalid data
  test("POST /api/registerevent", async () => {
    const validRequest = { firstname: "", lastname: "", email: "", eventdate: ""};
  
    await supertest(app).post("/api/registerevent").send(validRequest)
 
    .expect(400)
    .then((response) => {
        // Check response message
        expect(response.body.message).toEqual("Incomplete data");
    });
  });



