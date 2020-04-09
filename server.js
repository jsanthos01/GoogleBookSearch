const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fs = require( "fs" );
const axios = require("axios");


//includes the orm file where our logic is written --> same as we did in mySql
const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
 app.use(express.static("client/build"));

//endpoint that gets the info for a specific item
app.get("/api/book/:id", async (req, res) =>{
  //read ONE of the products in products.json file and then send it 
  const id = req.params.id;
  const products = JSON.parse(fs.readFileSync("db/products.json"));
  const product = products.filter(product => id === product.id)[0];
  res.send(product);

});

//endpoint that deleted a book from saved list
app.delete("/api/book/:id", async (req, res) =>{

});
//endpoint that updates the saved bookList
app.put("/api/book/:id", async (req, res) =>{

});


// Start the API server
app.listen(PORT, () =>
  console.log(`[googleBookSearch]. Running on PORT: ${PORT}!`)
);


