'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );

const app = express();

app.use( bodyParser.urlencoded( {
    extended: true
} ) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( helmet() );


const connect = require( './config/db' );
const routes = require( './routes/routes' );

app.locals.rootfolder=__dirname;

// app.use( connect.conn );
app.use( '/', routes );
// app.use( connect.conn.close );

app.use( ( error, request, response, next ) => {
    response.status( error.status || 500 );
    response.json( {
        error: error.message
    } );
} );

app.use( ( request, response, next ) => {
    let error = new Error( 'Not Found' );
    error.status = 404;
    response.json( error );
} );

var server = app.listen( 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log( 'App is listening on https://%s:%s', host, port );
});