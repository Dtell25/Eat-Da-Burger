var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(res, res){
    burger.all(function(data){
        var abObject = {
            burger: data
        };
        console.log(abObject);
        res.render("index", abObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.name, req.body.sleepy
    ], function(result){
        // send back the ID  if the new burger
        res.json({id: result.insertId});
    });
});

router.put("/api/cats/:id", function(req, res){
    var condition = "id = " + res.params.id;

    console.log("condition", condition);

    buger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = burger;

