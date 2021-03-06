'use strict';
var through = require( 'through2' );
var fs = require( 'fs' );
var jsonToSass = require( 'json-to-sass-map' );
var PluginError = require( 'plugin-error' );

module.exports = function( options ) {
	return through.obj( function( file, enc, cb ) {

		if ( file.isNull() ) {
			cb( null, file );
			return;
		}

		if ( file.isStream() ) {
			cb( new PluginError( 'gulp-json-to-sass', 'Streaming not supported' ) );
			return;
		}


		try {
			var jsonData = fs.readFileSync( options.source );
			var scss = jsonToSass( jsonData );
			fs.writeFileSync( options.output, scss );
			this.push( file );
		} catch ( err ) {
			this.emit( 'error', new PluginError( 'gulp-temp', err ) );
		}

		cb();
	} );
};
