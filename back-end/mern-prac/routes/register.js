var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/swayaway');
var collection = db.get('users');

router.get('/', function(req, res){
    collection.find({}, function(err, users){
        if (err) throw err;
        res.json(users);
    });
});

router.post('/', function(req, res){
    collection.insert({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password
    }, function(err, user){
        if (err) throw err;
        res.json(user);
    });
});

module.exports = router;