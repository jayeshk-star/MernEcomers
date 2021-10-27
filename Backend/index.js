const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("database connected successful");
  })
  .catch((error) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
