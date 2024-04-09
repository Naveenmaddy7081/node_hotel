





// ---------------55555
const express =require('express');
const app = express();
const db =require('./db');


const bodyParser =require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;





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



