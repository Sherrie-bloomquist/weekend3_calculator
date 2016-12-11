var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
var answer = [];

app.listen( port, function(){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // console.log( 'base url hit' );
  res.sendFile( path.resolve( 'client/index.html' ) );
}); // end base url

app.get('/calculateGet', function(req, res){
  console.log('calculateGet url hit');
});//end calculateGet

// calculatePost
app.post( '/calculatePost', urlEncodedParser, function( req, res ){
  console.log( 'calculatePost url hit. req.body:', req.body );

  // console.log(equation);
  var result = '';
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var type = req.body.type;
  console.log(' var y:', y);

  var mathTime = function(){
    if( type === '+'){
       result = x + y;
       console.log('result:', result);
    }
    answer.push(result);
  }; //end mathTime

res.send( answer );

}); // end calculatePost




// static folder
app.use( express.static( 'client' ) );
