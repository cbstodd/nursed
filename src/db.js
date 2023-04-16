// CRUD Operations with MongoDB.
require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = process.env.MONGO_URL;
const database = process.env.DATABASE_NAME;
