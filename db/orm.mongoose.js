const mongoose = require('mongoose');

//connect to Mongo Client
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
console.log(`Mongodb uri: ${process.env.MONGODB_URI}`);
const db = require( './models' );

async function postSavedBooks(bookData){
   const bookStuff = {
      title: bookData.title,
      imageLinks: bookData.imageLinks,
      description: bookData.description,
      authors: bookData.authors,
      infoLinks: bookData.infoLinks
   }
   //creating a new modal object
   const dbBooks = new db.books( bookStuff );

   //insert the bookData inside the collection
   const saveUser = await dbBooks.save();
   if( saveUser._id )
        return {message: `Book  ${saveUser.title}  successfully saved`, id: saveUser._id};
    else
        return { message: "Sorry failed", id: false };
}

//get all the books stored in the database
async function getSavedBooks(){
   const getSavedList = db.books.find({});
   return getSavedList;
}

//delete specific book with the given id
async function deleteBook(id){
   const deleteBookDb = db.books.deleteOne( { "_id" :`${id}` }, function (err) {
      if (err) return handleError(err)
   });
   return { message: "Book successfully deleted!!"};
}

module.exports = {
   postSavedBooks,
   getSavedBooks,
   deleteBook
}