const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: false,
    },
    hash: String,
    salt: String,
  },
  {
    timestamps: true,
  }
);

// Method to set salt and hash the password for a user
UserSchema.methods.setPassword = function (password) {
  // Create unique salt for particular user
  this.salt = crypto.randomBytes(16).toString("hex");

  //Hashing user's salt and pass with 1000 iterations
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

// Method to check entered password is correct or not
UserSchema.methods.validPassword = function (password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");

  return this.hash === hash;
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
