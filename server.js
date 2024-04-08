// var fs = require('fs');
// var os = require('os');

// var user =os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('getting.txt','Hii'+user.username+'!\n',()=>{
//     console.log("file is created");
// });

// // console.log(os);
// console.log(fs);

// const notes = require('./notes');
// var _= require('lodash');
// console.log('server file is available');

// var age =notes.age;

// var result = notes.addnumber(age+20,10);
// console.log(age);
// console.log('result is '+ result);

// var data =["person","person",1,2,1,2,'name','age','2'];
// var filter =_.uniq(data);
// console.log(filter);

// console.log(_.isString(true));

// ---------------55555
const express =require('express');
const app = express();
const db =require('./db');

const bodyParser =require('body-parser');
app.use(bodyParser.json());



app.get('/',function(req, res){
    res.send('hello world')
})




// import the router dat
const personRoutes =require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the rotus
app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);

// // app.get('/chiken', (req,res)=>{
// //     res.send('sure sir, i would love to serve chiken')
// // })
app.listen(3000 , ()=>{
    console.log('listening on port 3000');
})

// const express =require('express');
// const app = express();

// const db =require('./db');
// const connectDb = require('./db');

// app.use(express.json());
// const PORT =5000;

// connectDb().then(() =>{
//     app.listen(PORT, () =>{
//         console.log('server is port: ${PORT}');
//     });
// });

