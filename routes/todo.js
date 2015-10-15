/*
 * GET todo listing.
 */

var db = require('../db');

exports.list = function (req, res) {
	var collection = db.get().collection('todo');
	// var collection = db.get().collection('todo')
	collection.find().toArray(function (err, docs) {
		res.send(docs);
	})

};

