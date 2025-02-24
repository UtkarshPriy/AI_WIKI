// config/db.js - MongoDB Connection
const { MongoClient } = require('mongodb');
const mongoUri = process.env.MONGO_URI;
let db;

const connectDB = async () => {
    const client = new MongoClient(mongoUri);
    await client.connect();
    db = client.db("AI_Docs");
    console.log("Connected to MongoDB");
};

module.exports = { connectDB, getDB: () => db };