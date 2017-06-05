var mongoose = require('mongoose');

// Movie schema
movieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	Director:{
		type: String,
	},
	Actor:{
		type: String,
	},
	Studio:{
		type: String,
	},
	image_url:{
		type: String,
	},
	trailer_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

// Get Movies
module.exports.getMovies = function(callback, limit){
	Movie.find(callback).limit(limit);
}

// Get Movies By ID
module.exports.getMoviesById = function(id, callback){
	Movie.findById(id, callback);
}

// Add Movie
module.exports.addMovie = function(movie, callback){
	Movie.create(movie, callback);
}

// Update Movie
module.exports.updateMovie = function(id, movie, options, callback){
	var query = {_id: id};
	var update = {
		title: movie.title,
		genre: movie.genre,
		description: movie.description,
		Director: movie.Director,
		Actor: movie.Actor,
		Studio: movie.Studio,
		image_url: movie.image_url,
		trailer_url: movie.trailer_url
	}
	Movie.findOneAndUpdate(query, update, options, callback);
}

// Delete Movie
module.exports.removeMovie = function(id, callback){
	var query = {_id: id};
	Movie.remove(query, callback);
}