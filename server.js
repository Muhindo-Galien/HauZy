require("dotenv").config({path: "./config.env"});
const express = require('express');
const app = express();
const connectDB = require("./config/db");

const errorHandeler = require("./middleware/error");

// connectDB

connectDB();

app.use(express.json());

app.use("/api/auth", require('./routes/auth'));

app.use("/api/private", require('./routes/private'));




// errorHandeler

app.use(errorHandeler);
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, ()=>{console.log("Backend runnig");});
process.on("unhandeledRejection", (err, promise)=>{
    console.log(`Logged Error: ${err}`);
    server.close(()=> process.exit(1))
})