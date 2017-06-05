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

module.exports.getMoviesById = function(id, callback){
	Movie.findById(id, callback);
}

module.exports.addMovie = function(movie, callback){
	Movie.create(movie, callback);
}