const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require('./routes/userRoutes')

const app = express();
// const PORT = process.env || 8000;


// "mongodb://127.0.0.1:27017/student"   

MONGODB_URL = "mongodb://127.0.0.1:27017/student"

// middleware 
app.use(cors());
app.use(express.json());


mongoose.connect(MONGODB_URL).then(()=>{console.log("Connected to DB")

console.log("hi")}).catch((err)=>console.log("Db not Connected"))

// server is listening 
app.listen(8000,()=>console.log("SErver is listening"))

app.use(userRoutes)
