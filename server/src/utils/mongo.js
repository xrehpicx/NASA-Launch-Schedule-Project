const mongoose = require("mongoose");
require('dotenv').config(); //need to import dotenv to use env variables

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

// const MONGO_URL = `mongodb+srv://${username}:${password}@nasacluster.f4iu3on.mongodb.net/?retryWrites=true&w=majority`;

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function mongooseConnect() {
  console.log('connecting to: ', MONGO_URL);
  await mongoose.connect(MONGO_URL);
  console.log('connected to: ', MONGO_URL);
}

module.exports = mongooseConnect;
