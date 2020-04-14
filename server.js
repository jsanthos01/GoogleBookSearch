require('dotenv').config()
const express = require("express");
const app = express();
const fs = require( "fs" );
const axios = require("axios");
const path = require("path")
const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: false }));

app.post("/api/savedBooks", async (req, res) => {
  const bookData = req.body;
  console.log(bookData);
  const bookResult = await orm.postSavedBooks( bookData );
  console.log(bookResult)
  res.send(bookResult );
})

app.get("/api/savedBooks", async (req, res) => {
  const bookResult = await orm.getSavedBooks( );
  res.send(bookResult );
})


//endpoint that deleted a book from saved list
app.delete("/api/deleteBook/:id", async (req, res) =>{
  console.log(req.params.id);
  const id = req.params.id
  const deleteBookDb = await orm.deleteBook(id);

  res.send(deleteBookDb)

});

app.get('/*', function( req,res ){
  console.log("redirect to index page!");
  res.sendFile( path.join(__dirname, 'build', 'index.html') );
});

// Start the API server
app.listen(PORT, () =>
  console.log(`[googleBookSearch]. Running on PORT: ${PORT}!`)
);


