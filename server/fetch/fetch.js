//import express
var express = require("express");

//create the Router Instance
var router = express.Router();

//import mongodb
var mongodb = require("mongodb");

//create the Mongo Client
var app = mongodb.MongoClient;

//create the get request
router.get("/",function(req,res){
    app.connect("mongodb://localhost:27017/ng4pm",
                    function(err,db){
        db.collection("ProductOne").find()
            .toArray(function(err,array){
                res.send(array);
        });
    });
});

//export the router
module.exports =router;
//ng serve --host 192.168.100.7 to run in mobile device