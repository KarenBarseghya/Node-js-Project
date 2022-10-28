const mongoose = require('mongoose');
const { object } = require('mongoose/lib/utils');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type : String,
    }, 

    username: {
        type: String,
    },

    email: {
        type: String,
        unique : true,
    },
    
    address : {
        type: Object,
    },

    phone: {
        type: Number,
    },

    website: {
        type: String,
    },

    company: {
        type: Object,
    }


    
},{timestamps: true})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;