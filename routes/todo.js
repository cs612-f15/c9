/*
 * GET todo listing.
 */

var db = require('../db');

exports.list = function (req, res) {
	var collection = db.get().collection('todo');
	// var collection = db.get().collection('todo')
	collection.find().limit(4).sort({'id':-1 }).toArray(function (err, docs) {
		if (err){
			res.send({'error' : err});
			return;
		}
		
		for (var i = 0, len = docs.length; i < len; i++) {
			docs[i].done = docs[i].done == true ? 'yes' : 'no';
		}
		
		res.send(docs);
	})

};

