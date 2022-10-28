const express = require("express");
const Post = require('../../database/database');
const mongoose = require('mongoose');
const { post } = require('../routers/userRouter');
const res = require("express/lib/response");

Mongo_URL = 'mongodb+srv://karen77:karenkaren77@cluster0.3kwcsfl.mongodb.net/node-blog?retryWrites=true&w=majority';

const connectDB = async() =>
{
    try {
        const con = await mongoose.connect(Mongo_URL, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
    }catch(err) {
        res.status(404).send(err);
    }
}

connectDB();


class userService {
    create(data) {
        const post = new Post(
            {
                name: data.name,
                username: data.username,
                email: data.email,
                address: data.address,
                phone: data.phone,
                website: data.website,
                company: data.company,
            }
        )

        post.save(post).then(data => {
            res.status(201).send({succsses: true});
        }).catch(err => {
            res.status(404).send(err);
        })
    }

    getAll(req, res) {
        Post.find().then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(404).send(err);
        })
    }

    getOne(req, res) {
       Post.findById(req.params.id).then(data => {
           res.status(200).send(data);
       }).catch(err => {
           res.status(404).send(err);
       })
    }

    update(req, res) {
        Post.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false}).then(
            data => {res.status(202).send({succsses: true});
            }).catch(err => {
                res.status(404).send(err);
            })
    }

    delete(req, res) {
        Post.findByIdAndDelete(req.params.id).then(data => {
            res.status(204).send({succsses: true})
        }).catch(err => {
            res.status(404).send(err);
        })
    }
}

module.exports = new userService();