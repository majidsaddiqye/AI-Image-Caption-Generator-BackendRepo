const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To Db"))
    .catch((err) => console.log(err));
}

module.exports = connectDb