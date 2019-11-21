const express = require('express')
const route = express.Router()
const mongoose = require("mongoose");

// importing models
const Post = require('../models/Post')

// to create new post

route.post('/' , (req , res ) => {

let post = new Post({
  description: req.body.description
});

post.save()
.then(data => {
      res.json(data)
}).catch(err => {
  res.send(err)
}) 
})
module.exports = route