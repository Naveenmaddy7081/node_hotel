const mongoose = require('mongoose');

//define persion schema
const personSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum: ['chef', 'water', 'manager'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})

// create prson model
const Person = mongoose.model('Person',personSchema);
module.exports =Person;