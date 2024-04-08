const mongoose = require('mongoose');
//define the mongodb connnection url

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

mongoose.connect('mongodb://127.0.0.1:27017/hotels', { useNewUrlParser: true, useUnifiedTopology: true });


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