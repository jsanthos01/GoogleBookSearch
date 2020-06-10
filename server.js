require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path")
const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;

//middleware that reads incoming JSON objects
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//built-in middleware function used to server static files
app.use(express.static( path.join(__dirname, "build")) );

// handle POST requests to /api/savedBooks
app.post("/api/savedBooks", async (req, res) => {
  const bookData = req.body;
  const bookResult = await orm.postSavedBooks( bookData );
  res.send(bookResult);
})

// handle GET requests to /api/savedBooks
app.get("/api/savedBooks", async (req, res) => {
  const bookResult = await orm.getSavedBooks( );
  res.send(bookResult );
})

// handle DELETE requests to /api/deleteBook/:id
app.delete("/api/deleteBook/:id", async (req, res) =>{
  const id = req.params.id
  const deleteBookDb = await orm.deleteBook(id);
  res.send(deleteBookDb)
});

app.get('/*', function( req,res ){
  res.sendFile( path.join(__dirname, 'build', 'index.html') );
});

// Start the API server
app.listen(PORT, () =>
  console.log(`[googleBookSearch]. Running on PORT: ${PORT}!`)
);


