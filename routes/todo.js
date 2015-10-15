/*
 * GET todo listing.
 */

var MongoClient = require('mongodb').MongoClient,
	fs = require('fs'),
	assert = require('assert');


var mdbPassword = fs.readFileSync('./mdbPassword.private', {}, function (error) {
	console.error("couldn't read the password file - create it - mdbPassword.private");
	throw error;
});

var todoItems = [
	{ 'id': 1, 'title': 'do homework', 'done': false },
	{ 'id': 1, 'title': 'do homework', 'done': false },
	{ 'id': 2, 'title': 'do homework', 'done': false },
	{ 'id': 3, 'title': 'do homework', 'done': false },
	{ 'id': 4, 'title': 'do homework', 'done': false },
	{ 'id': 5, 'title': 'do homework', 'done': false }
];


exports.list = function (req, res) {
	var rv = doConnection();
	res.send(new Object(rv));
};


function doConnection() {

	// Connection URL
	var url = 'mongodb://cs612:' + mdbPassword + '@ds042138.mongolab.com:42138/scicoriapace';
	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server");

		var col = db.collection('todo');

		col.find().limit(100).toArray(function (err, docs) {
			console.log('got the data now...');
			todoItems = docs;

			console.log(docs);
			db.close();
		});

	});

	console.log('returning data');
	return todoItems;

}