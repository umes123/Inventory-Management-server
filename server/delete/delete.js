//import express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import the mongodb
var mongodb = require("mongodb");
//create the MongoClient
var app = mongodb.MongoClient;
//create the Post Request

const {ObjectId} = require('mongodb');

router.post("/",function(req,res){
    var _id = req.body._id;
    //console.log(_id)
    var obj = {"_id":ObjectId(_id)};
    app.connect("mongodb://localhost:27017/ng4pm",
                            function(err,db){
        db.collection("ProductOne").deleteOne(obj,
                        function(err,result){
            if(err){
                res.send({"delete":"fail"});
            }else{
                res.send({"delete":"success"});
            }
        });
    });
});
//export the Router
module.exports = router;