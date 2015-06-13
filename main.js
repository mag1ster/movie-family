'use strict';
var Movie = {
	createConfig : function(){
		theMovieDb.configurations.getConfiguration(this.successCB, this.errorCB)
	},
	successCB : function(){
		console.log('Success creating config files');
	},
	errorCB : function(){
		console.log('Error creating config files');
	}
}

sessionMovie = new Movie;