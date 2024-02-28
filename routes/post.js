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
        postById ? res.status(200).send(postById) : res.status(400).send('Id not found');
    }catch(err){
        res.status(400).send(err.message)
    }
})


postRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const postById = await Post.findByIdAndDelete(id);
        postById ? res.status(200).send(' DELETED ! ') : res.status(400).send('Id not found')
    }catch(err){
        res.status(400).send(err.message)
    }
})


postRouter.put('/update/:id',async(req,res)=>{
    try{    
        const id = req.params.id;
        const contenu = req.body.contenu
        await Post.findByIdAndUpdate(id,{
            $set:{contenu:contenu}
        });
        res.status(200).send(' UPDATED !')
    }catch(err){
        res.status(400).send(err.message)
    }
})


module.exports = postRouter;