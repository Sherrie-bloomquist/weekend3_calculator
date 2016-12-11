var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
var equation = [];

app.listen( port, function(){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // console.log( 'base url hit' );
  res.sendFile( path.resolve( 'client/index.html' ) );
}); // end base url

// // testPost
// app.post( '/testPost', urlEncodedParser, function( req, res ){
//   console.log( 'testPost url hit. req.body:', req.body );
//   // do work here
//   serverArray.push(req.body);
//   console.log(serverArray);
//
//   res.send( serverArray );
// }); // end testPost




// static folder
app.use( express.static( 'public' ) );
