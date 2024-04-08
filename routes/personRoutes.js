const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


// post route add a prson
router.post('/',async (req, res) =>{
    try{
        const data = req.body // asuming req body contain prson data

        //create a new prson dcumt
        const newPerson =new Person(data);
        // newPerson.name = data.name;

        //save the new prson 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})

// get method prson
router.get('/',async (req, res) =>{
    try{
       const data = await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})


router.get('/:worktype', async (req, res)=>{
    try{
        const worktype = req.params.worktype;
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
            const response = await Person.find({work: worktype});
            console.log('response fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json({erroe: 'invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})


//update method
router.put('/:id',async (req, res)=>{
    try{
        const personId = req.params.id;
        const updatePersonData =req.body;
        
        const response =await Person.findByIdAndUpdate(personId, updatePersonData,{
            new:true,
            runValidators:true,
        })

        if (!response){
            return res.status(404).json({error:'person not fond'});
        }

        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});


    }
})

router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if (!response){
            return res.status(404).json({error:'person not fond'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted sucess'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});


    }
})


module.exports = router;