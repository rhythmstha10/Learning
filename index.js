const express = require("express");
const dotenve= require("dotenv");
const connectToDatabase = require("./db/db");

dotenve.config();
const app = express();

connectToDatabase();

const PORT = process.env.PORT; 

app.listen(PORT, () => {

    console.log(`Serever is running on PORT ${PORT}`);
} );

app.get("/", (req, res) => {
    res.send("Rhythm , Backend is running");
})

