<<<<<<< HEAD:blog/api/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
console.log("hellows");
=======
>>>>>>> 40e05ba2ebd7290666cfaffdf95ccb6aa8d1b5e7:Blog-Site/api/index.js
