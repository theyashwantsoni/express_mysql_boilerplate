const router = require( 'express' ).Router();
var dbcon = require('../config/db.js');

router.get( '/ping', ( request, response ) => {
    response.send(JSON.stringify({ping:'pong'}));
 } );

router.get( '/signin', ( request, response ) => {
    dbcon.query('select * from users', function (error, results, fields) {
        if (error) throw error;
        response.end(JSON.stringify(results));
      });
 } );


 module.exports = router;
