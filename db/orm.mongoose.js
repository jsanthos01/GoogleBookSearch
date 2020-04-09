const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true});

const db = require( './models' );


async function postSavedBooks(){
   // const dbResult = await db.users.updateOne({_id:userID}, {$push: {favourites: mongoose.Types.ObjectId(thumbId)}});
   const dbResult = await db.users.updateOne({_id:userId}, { $push: { favourites: mongoose.Types.ObjectId(thumbId) } });
   return dbResult.ok ? true : false;
}

module.exports = {
   postSavedBooks
}