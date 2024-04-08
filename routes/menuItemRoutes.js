const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
const { route } = require('./personRoutes');


router.post('/',async (req, res) =>{
    try{
        const data = req.body // asuming req body contain prson data

        //create a new prson dcumt
        const newMenu =new MenuItem(data);
        // newPerson.name = data.name;

        //save the new prson 
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})



router.get('/',async (req, res) =>{
    try{
       const data = await MenuItem.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

router.get('/:taste', async (req, res) =>{
    try{

    }catch(err){
        
    }

})

module.exports = router;
