/**
 * Imports
 */
const mongoose = require("mongoose");

/**
 * Schema
 */
const UserSchema = new mongoose.Schema({
  gid: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  profile: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
