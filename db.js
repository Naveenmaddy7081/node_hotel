const mongoose = require('mongoose');
//define the mongodb connnection url
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

// const connectDb =async () =>{
//     try{
//         await mongoose.connect(mongoURL);
//         console.log('connection sucess');
//     } catch (error){
//         console.log('database connection feild');
//         process.exit(0);
//     }
// };

// module.exports = connectDb;
//set mongodb connection
// mongoose.connect(mongoURL, {
//     userNewUrlParser: true,
//     userUnifiedTopology: true
// })
// const mongoUrl = process.env.MONGODB_URL;
const mongoUrl= process.env.MONGODB_URL_LOCAL;
// mongodb+srv://naveenmaddy6392:nm123456@cluster0.xbtjtbj.mongodb.net/
// mongodb://127.0.0.1:27017/hotels  

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongodb server');
});

db.on('error', (err) => {
    console.log('mongodb connection error',err);
});

db.on('disconnected', ()=> {
    console.log('mongodb disconnected');
});

// export the databse connection
module.exports =db;