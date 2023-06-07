const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();



const userRoutes = require('./routes/userRoutes')

const app = express();

// middleware 
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/student").then(()=>{console.log("Connected to DB")

console.log("hi")}).catch((err)=>console.log("Db not Connected"))

// server is listening 
app.listen(8000,()=>console.log("SErver is listening"))

app.use(userRoutes)
