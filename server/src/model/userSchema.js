const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const stringType = {
  type: String,
  required: true
}

const userSchema = new mongoose.Schema({
  googleLoginId: stringType,
  name: stringType,
  shoppingList: {
    type: Object,
    default: []
  }
}, {timestamps: true});

// adding findOrCreate plugin for making it easier to add new user into mongodb
userSchema.plugin(findOrCreate);
const User = mongoose.model("Users", userSchema);

module.exports = User;
