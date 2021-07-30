const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: String,
  owner: String,
  image: String,
  description: String,
});

const Cat = mongoose.model("Cat", CatSchema);

module.exports = Cat;