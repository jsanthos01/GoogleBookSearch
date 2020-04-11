const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookShema = new Schema({
  title: {type : String},
  imageLinks: {type: String},
  description: {type: String},
  authors: [{type: String}],
  infoLinks: {type: String}  
});
const books = mongoose.model("books", bookShema);

module.exports = books;

