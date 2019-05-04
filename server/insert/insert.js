//import the express
var express = require("express");

//create the router instance
var router = express.Router();

//import the mongodb
var mongodb = require("mongodb");


//create the mongo client
var app = mongodb.MongoClient;


//create the post request
router.post("/",function(req,res){
    var name = req.body.name;
    var price = req.body.price;
    var rating = req.body.rating;
    var obj = {'name':name,'price':price,'rating':rating};
    app.connect("mongodb://localhost:27017/ng4pm",
                     function(err,db){
        db.collection("ProductOne").insertOne(obj,
                                        function(err,result){
            if(err){
                res.send({insert:"fail"});
            }else{
                res.send({insert:"success"});
            }
        });
    });
});

//export the router
module.exports = router;




