var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
var answer = [];
var fromClient = [];

app.listen( port, function(){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // console.log( 'base url hit' );
  res.sendFile( path.resolve( 'client/index.html' ) );
}); // end base url


// calculatePost
app.post( '/calculatePost', urlEncodedParser, function( req, res ){
  console.log( 'calculatePost url hit. req.body:', req.body );
  // var result = '';
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var type = req.body.type;
  fromClient.push(req.body);

  console.log(' var y:', y);

  var mathTime = function(){
    if( type === '+'){
       result = x + y;
       var resultAdd = {
         answer: result,
       };
       res.send(resultAdd);
    }
    else if( type === '-'){
       result = x - y;
       var resultSubtract = {
         answer: result,
       };
       res.send(resultSubtract);
    }
    else if( type === '*'){
       result = x * y;
       var resultMultiply = {
         answer: result,
       };
       res.send(resultMultiply);
    }
    else if( type === '/'){
       result = x / y;
       var resultDivide = {
         answer: result,
       };
       res.send(resultDivide);
    }
  }; //end mathTime

  mathTime();

}); // end calculatePost







// static folder
app.use( express.static( 'client' ) );
