const express = require("express");
const dotenve= require("dotenv");

dotenve.config();
const app = express();

const PORT = process.env.PORT; 

app.listen(PORT, () => {

    console.log(`Serever is running on PORT ${PORT}`);
} );

app.get("/", (req, res) => {
    res.send("Rhythm , Backend is running");
})

