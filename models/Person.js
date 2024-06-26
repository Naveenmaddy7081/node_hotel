const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username:{
        required: true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
});

personSchema.pre('save', async function(next){
    const person = this;

    //hash the password
    if(!person.isModified('password')) return next();

    try{
        // hash pass genertr
        const salt = await bcrypt.genSalt(10);

        //hash passwd
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // overide the plain pssd
        person.password = hashedPassword;


        next();
    }catch(err){
        return next(err);

    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // use bcrypt compre
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;

    }catch(err){
        throw err;
    }
}


// create prson model
const Person = mongoose.model('Person',personSchema);
module.exports =Person;