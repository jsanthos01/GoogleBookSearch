const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true});
const db = require( './models' );


async function postSavedBooks(bookData){
   console.log("Inside orm file")
   console.log(bookData);

   const bookStuff = {
      title: bookData.title,
      imageLinks: bookData.imageLinks,
      description:bookData.description,
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

async function getSavedBooks(){
   const getSavedList = db.books.find({});
   return getSavedList;
}

async function deleteBook(id){
   const deleteBookDb = db.books.deleteOne( { "_id" :`${id}`}, function (err) {
      if (err) return handleError(err)
   });
   
   return { message: "Book successfully deleted!!"};

}

module.exports = {
   postSavedBooks,
   getSavedBooks,
   deleteBook
}