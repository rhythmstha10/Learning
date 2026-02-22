const mongoose = require("mongoose");
const dotenve= require("dotenv");

dotenve.config();

const DB_URL = process.env.DB_URL;
const connectToDatabase = async ()=> {

    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Error while connected db is ${error}`);
        
    }
    console.log(DB_URL);

}

module.exports= connectToDatabase;
