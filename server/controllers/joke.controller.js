const { json } = require('express');
const Joke = require('../models/joke.model'),
    mongoose= require('mongoose');

module.exports = {
    index : (req, res)=> {
        Joke.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create : (req, res)=> {
        Joke.create(req.body)
        .then(data => res.json({results: data}))
        .catch(err => res.json(err.errors))
    },
    show : (req, res) => {
        Joke.findOne({_id:req.params.id})
        .then(data => {
            res.json({results:data})
        })
        .catch(err => res.json(err.errors))
    },
    update : (req, res) => {
        Joke.findOneAndUpdate({_id:req.params._id}, req.body, {useFindAndModify: true, runValidators })
        .then(data  => {
            res.redirect(`/api/jokes/${data.id}`)
            res.json({results:data})
        })
        .catch(err => res.json(err.errors))
    },
    destroy : (req, res) => {
        Joke.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => json(err.errors))
    },
}