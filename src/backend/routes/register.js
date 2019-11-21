const express = require('express')
const route = express.Router();
const mongoose = require("mongoose");


//import models
const User = require('../models/User')




route.get('/' ,(req ,res) => {
  res.send("hello")
})

route.post('/' , (req , res ) => {

let user = new User({

      username : req.body.username ,
      password : req.body.password,
      email : req.body.email


});

user.save()
.then(data => {
      res.send(data)
}).catch(err => {
  res.send(err)
})




})















module.exports = route