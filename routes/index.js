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
  console.log(req.body.id);
  
  var doc = new Movie();

  var resultSave = function (err, doc) {
       
          if (!err) {
            console.log('se grabo');
            res.send(doc);
          
          } else {

            res.send('{"success":false}');
          
          }
      };
    
  if( req.body.id ){

    Movie.findById(req.body.id, function (err, doc) {
      
      if (!err) {
        doc.set(req.body);    
        console.log('editando: ',doc);
        doc.save(resultSave);
      }

    });

  }else{
  
    doc.set(req.body);  
    console.log('creando: ',doc);
    doc.save(resultSave);
  }

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
