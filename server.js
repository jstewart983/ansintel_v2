// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser'); 	// get body-parser
var morgan     = require('morgan'); 		// used to see requests
var mongoose   = require('mongoose');
var config 	   = require('./config');
var path 	     = require('path');
var mssql      = require('mssql');

var sqlconnection = new mssql.Connection(config.sqlcon,function(err){
  if (err)
    return err;
  else


    var request = new mssql.Request(sqlconnection);
    request.query('select * from sr_type',function(err,recordset){
      if(err){
        console.log(err);
      }else{
        console.log(recordset)
      }
    });

});
// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(config.port);
console.log('Go to http://localhost:'+config.port+'/');
