// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ),
    appRoute = require( './routes/index' ); //Utilities for dealing with file paths

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( __dirname, 'public' ) ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// insert
app.put('/movie', appRoute.AddMovie);

// update
app.put('/editMovie', appRoute.EditMovie);

app.get('/listMovies', appRoute.GetListMovies);

//delete Movie
app.delete('/delete', appRoute.DeleteMovie);

//Start server
var port = process.env.PORT || 4711;

app.listen( port, function() {
    
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );

});
