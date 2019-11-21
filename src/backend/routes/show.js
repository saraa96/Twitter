const express = require('express')
const route = express.Router();
const mongoose = require("mongoose");
const Post = require('../models/Post')


route.get('/' , (req ,res ) => {

 Post.find()
 .then(data => {
        res.json(data)
 }).catch(err => {
   res.json(err)
 })

})






















module.exports = route