var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/swayaway_assignment3');
var collection = db.get('properties');

router.get('/', function(req, res){
    collection.find({}, function(err, properties){
        if (err) throw err;
        res.json(properties);
    });
});

router.get('/:id', function(req, res) {
	collection.find({ prop_id: req.params.id }, function(err, property){
		if (err) throw err;
	  	res.json(property);
	});
});

router.put('/:id', function(req, res) {
	//req.body is used to read form input
	collection.update({prop_id: req.params.id },
		{ $set: {
		title: req.body.title,
        props_ratings: req.body.props_ratings,
        available: req.body.available
		}
	}, function(err, property){
		if (err) throw err;
		// if update is successfull, it will return updated object
	  	res.json(property);
	});
});

router.post('/', function(req, res) {
	//req.body is used to read form input
	collection.insert({ 
    prop_id : req.body.prop_id,
    title: req.body.title,
    house_type: req.body.house_type,
    prop_type: req.body.prop_type,
    max_guests: req.body.max_guests,
    bedrooms: req.body.bedrooms,
    address: req.body.address,
    props_rating: req.body.props_rating,
    amenities: req.body.amenities,            
    reservations: req.body.reservations,
    house_rules: req.body.house_rules,
    photo: req.body.photo,
    price: req.body.price,
    available: req.body.available
	}, function(err, property){
		if (err) throw err;
		// if insert is successfull, it will return newly inserted object
	  	res.json(property);
	});
});

router.delete('/:id', function(req, res) {
	collection.remove({ prop_id: req.params.id }, function(err, property){
		if (err) throw err;
	  	res.json(property);
	});
});

module.exports = router;