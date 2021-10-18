// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URL, (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.');}
//     else{ console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2));}
// });


const mongoose = require('mongoose').Mongoose;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'MEANSTACKDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(MEANSTACKDB);

  client.close();
});