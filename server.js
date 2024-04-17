
// ---------------55555
const express =require('express');
const app = express();
const db =require('./db');
require('dotenv').config();
const passport = require('./auth');
// const LocalStrategy = require('passport-local').Strategy;
// const Person = require('./models/Person');


const bodyParser =require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// midle ware fun
const logRequest = (req, res, next) => {
    console.log(` [${new Date().toLocaleString()}] Request mode to: ${req.originalUrl}`);
    next();
}

app.use(logRequest);




app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session: false}) 
app.get('/', function (req, res) {
    res.send('welcome to our hotel');
})



app.get('/',function(req, res){
    res.send('hello world')
})




// import the router dat
const personRoutes =require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the rotus
app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);




app.listen(3000 , ()=>{
    console.log('listening on port 3000');
})



