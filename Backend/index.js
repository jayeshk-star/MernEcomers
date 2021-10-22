const express = require("express");
const app = express();
const PORT = process.env.PORT || 2345;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute=require("./routes/user")
dotenv.config();
app.use(express.json())

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("connect succesful");
  })
  .catch((e) => {
    console.log(e);
  });
 
  app.use("/api/users",userRoute)

app.listen(PORT, () => {
  console.log("backend is running");
});
