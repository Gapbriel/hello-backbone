var mongoose = require( 'mongoose' );

mongoose.connect('mongodb://localhost/gmnm');

var Schema = mongoose.Schema;

var Movie = mongoose.model('Movie', new Schema({
                                                  title: String,
                                                  duration: Number,
                                                  genre: String,
                                                  sinopsis: String
                                                }));

// insert
exports.AddMovie = function (req, res) {
  
  var doc = new Movie(req.body);
  
  doc.save(function (err, doc) {

    if (!err) {
      res.send(doc);
    
    } else {

      res.send('{"success":false}');
    
    }

  });

};


// update
exports.EditMovie = function (req, res) {

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

};

exports.GetListMovies = function ( req, res) {

    return Movie.find( function ( err, movie ) {       
        if( !err ){
            return res.send( movie );
        }else{
            return console.log( err );
        }
    });

};

//delete Movie
exports.DeleteMovie =  function(req, res){
  
    return Movie.findById(req.body.id, function(err, movie){
        
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

};
