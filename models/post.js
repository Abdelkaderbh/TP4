const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    contenu :{type: String,required: true},
    createdAt : Date
})


const Post = mongoose.model('Post',postSchema);
module.exports=Post;