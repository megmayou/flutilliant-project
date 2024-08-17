const mongoose = require("mongoose");

const usersShema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  userLastName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
    unique: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
  userRoles: {
    type: Number,
    require: true,
  },
});

const UsersInformations = mongoose.model("users", usersShema);

module.exports = UsersInformations;
