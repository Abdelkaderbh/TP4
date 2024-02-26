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



module.exports = postRouter;