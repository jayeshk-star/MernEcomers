const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 2345;

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.URL)
  .then(() => console.log("data-base connection sucssful"))
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
