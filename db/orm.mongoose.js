const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://googlebooks:test1234567@ds125479.mlab.com:25479/heroku_pf430d0r", {userMongoClient: true, useNewUrlParser: true});

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
   const saveUser = await dbBooks.save().then(
      (data) => {
         console.log(data);
      }).catch((err) =>{
         console.log(err);
      });
   
   return { message: "Book successfully saved!!"};
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