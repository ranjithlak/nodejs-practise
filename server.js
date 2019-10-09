 var express = require('express');
   var bodyParser = require('body-parser');
   var mysql = require('mysql');
   var app = express();

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(express.static('public'));

  var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'copedb'
   });
   connection.connect();

    app.post('/person', function(req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
   var query = connection.query('insert into person (Author,Title,Body) values (?,?,?)', person, function (err,     result) {
    if (err) {
        console.error(err);
        return res.send(err);
    } else {
        return res.send('Ok');
    }
    });
    //res.send('received the data.');
    });
    app.listen(8089);