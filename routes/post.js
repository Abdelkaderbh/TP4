const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post');


postRouter.post('/add', async (req, res) => {
    try {
        const contenu = req.body.contenu;
        const createdAt=new Date();
        const post = new Post({ contenu, createdAt });
        await post.save();
        res.status(201).send(' POST ADDED !');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


postRouter.get('/all', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).send(posts);

    }catch(err){
        res.status(400).send(err.message)
    }
})


postRouter.get('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const postById = await Post.findById(id);
        res.status(200).send(postById);
    }catch(err){
        res.status(400).send(err.message)
    }
})



module.exports = postRouter;