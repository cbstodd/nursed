// CRUD Operations with MongoDB.
require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = process.env.MONGO_URL;
const databaseName = process.env.DATABASE_NAME;

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
      name: 'Colin Stodd',
      age: 39,
    });
  }
);
