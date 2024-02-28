const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const post = require('./routes/post');
const user=require('./routes/auth');
dotenv.config()
const MONGODB_URL=process.env.DATABASE_URL;

//if port is not working it will change and try the piped port
const PORT = process.env.PORT || 5000;

//connection to database 
mongoose.connect(MONGODB_URL).then(()=>{
    console.log('connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`server is running on PORT : ${PORT}`)
    })
}).catch((err)=>{
    console.log('Error connecting to mongodb',err.message)
})


//using router and parser
app.use(express.json());
app.use('/post',post);
app.use('/auth',user);
