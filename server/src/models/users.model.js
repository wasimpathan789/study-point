const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    qualification:{
        type:String,
        required: true,
    }
    ,
    email:{
        type:String,
        required: true,
    },
    gender:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:Number,
        required: true,
    },
    dob:{
        type:Date,
        required: true,
    },
    joining:{
        type:Date,
        required: true,
    }
})

const User = mongoose.model("user", UserSchema)

module.exports = User;




// },{timestamps:true})