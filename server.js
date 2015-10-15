
/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, http = require('http')
	, path = require('path')
	, fs = require('fs');

/**
 * adding items and routes for todo items
 * 
 */

var todo = require('./routes/todo');
var db = require('./db');

var debug = require('debug')('c9:server');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

/** this is the map for GET */
app.get('/api/todo', todo.list);


// Connect to Mongo on start
var mdbPassword = fs.readFileSync('./mdbPassword.private', {}, function (error) {
	console.error("couldn't read the password file - create it - mdbPassword.private");
	throw error;
});

// Connection URL
var url = 'mongodb://cs612:' + mdbPassword + '@ds042138.mongolab.com:42138/scicoriapace';

db.connect(url, function (err) {
	if (err) {
		console.log('Unable to connect to Mongo.')
		process.exit(1)
	} else {
		http.createServer(app).listen(app.get('port'), function () {
			console.log('Express server listening on port ' + app.get('port'));
		})
    }});



