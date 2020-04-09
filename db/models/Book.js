const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookShema = new Schema({
  title: { type : String },
  description: { type: String },
  author: { type: String },
  imageLink: { type: String },
  infoLink: { type: String },  
});
const Book = mongoose.model("Book", bookShema);

module.exports = Book;

