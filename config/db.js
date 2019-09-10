'user strict';

var mysql = require('mysql');

//local mysql db connection
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'gmail'
});

conn.connect(function(err) {
    if (err) throw err;
});

module.exports = conn;