var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//import the fetch module
var fetch = require("./fetch/fetch");
app.use("/fetch",fetch);
//import the insert module
var insert = require("./insert/insert");
app.use("/insert",insert);
//import the update module
var update = require("./update/update");
app.use("/update",update);
//import the delete module
var remove = require("./delete/delete");
app.use("/delete",remove);
//assign the port no.
app.listen(8090);
console.log("Server Listening the port no.8090");

//http://localhost:8080/fetch
//http://localhost:8080/insert
//http://localhost:8080/update
//http://localhost:8080/delete