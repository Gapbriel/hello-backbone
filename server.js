// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

mongoose.connect('mongodb://localhost/gmnm');
var Schema = mongoose.Schema;
var Movie = mongoose.model('Movie', new Schema({
                                                  title: String,
                                                  duration: Number,
                                                  genre: String,
                                                  sinopsis: String
                                                }));

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
app.put('/movie', function (req, res) {
  
  var doc = new Movie(req.body);
  
  doc.save(function (err, doc) {

    if (!err) {
      res.send(doc);
    
    } else {

      res.send('{"success":false}');
    
    }

  });

});

// update
app.put('/editMovie', function (req, res) {

  Movie.findById(req.body.id, function (err, doc) {

    if (!err) {

      for (var i in req.body) {

        if (i !== '_id') {
          doc[i] = req.body[i];
        }
      }

      doc.save(function (err, doc) {

        if (!err) {

          res.send(doc);
        }
        else {

          res.send('{"success":false}');
        }
      });
    }
    else {

      res.send('{"success":false}');
    }
  });
});

app.get('/listMovies', function ( req, res) {

    return Movie.find( function ( err, movie ) {       
        if( !err ){
            return res.send( movie );
        }else{
            return console.log( err );
        }
    });

});

//delete Movie
 
app.delete('/delete', function(req, res){
  
    return Movie.findById(req.body.id, function(err, movie){
        console.log('busqueda',movie);
        return movie.remove(function(err){
            if(!err){
                console.log('Movie removed');
                return res.send('');
            } else {
              return res.send(err);
                console.log(err);
            }
        });
    });   

});

//Start server
var port = process.env.PORT || 4711;
app.listen( port, function() {
    
console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );

});