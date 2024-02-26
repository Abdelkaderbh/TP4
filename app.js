const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const MONGODB_URL=process.env.DATABASE_URL;
//if port is not working it will change and try the piped port
const PORT = process.env.PORT || 5000;


mongoose.connect(MONGODB_URL).then(()=>{
    console.log('connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`server is running on PORT : ${PORT}`)
    })
}).catch((err)=>{
    console.log('Error connecting to mongodb',err.message)
})

