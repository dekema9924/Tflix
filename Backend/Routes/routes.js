


const express = require("express");
const routes = express.Router();

 
routes.get('/', function (req, res) {
    console.log("Router Working");
    res.send('from router')
})


//get Api movies
 

module.exports = routes


