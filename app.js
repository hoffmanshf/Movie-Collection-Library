var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genres');
Movie = require('./models/movies');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/movierating');
var db = mongoose.connection;

// HTTP GET REQUEST
app.get('/', function(req, res){
	res.send('HelloWorld');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.get('/api/movies', function(req, res){
	Movie.getMovies(function(err, movies){
		if(err){
			throw err;
		}
		res.json(movies);
	});
});

app.listen(3000);
console.log('Running on port 3000');