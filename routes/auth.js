const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');




router.post('/register',async (req,res)=>{
    try {
        //Destructuring assignment ES6
        const {username,password} = req.body;
        const user = new User ({username,password})
        await user.save();
        res.status(201).send(' User Registered !')
    }catch(err){
        res.status(400).send(err.message)
    }
});




//login
//model Post + CRUD