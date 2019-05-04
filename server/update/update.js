//import express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import the mongodb
var mongodb = require("mongodb");
//create the Mongo Client
var app = mongodb.MongoClient;
//create the post request

const {ObjectId} = require('mongodb');

router.post("/",function(req,res){
    var _id=req.body._id;
    var name = req.body.name;
    var price = req.body.price;
    var rating = req.body.rating;

    var old_obj={'_id':ObjectId(_id)}
    var new_obj = {'name':name,'price':price,'rating':rating};

    app.connect("mongodb://localhost:27017/ng4pm",
                    function(err,db){
        db.collection("ProductOne").updateOne(old_obj,new_obj,
                    function(err,result){
            if(err){
                res.send({'update':'fail'});
            }else{
                res.send({'update':'success'});
            }
        });
    });
});

module.exports = router;