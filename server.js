const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fs = require( "fs" );
const axios = require("axios");
const path = require("path")

const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/*', function( req,res ){
  console.log("redirect to index page!");
  res.sendFile( path.join(__dirname, '/client/build/', 'index.html') );
});

app.post("/api/savedBooks", async (req, res) => {
  const bookData = req.body;
  console.log(bookData);
  const bookResult = await orm.postSavedBooks( bookData );
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

// Start the API server
app.listen(PORT, () =>
  console.log(`[googleBookSearch]. Running on PORT: ${PORT}!`)
);


