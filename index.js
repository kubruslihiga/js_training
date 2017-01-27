var express = require('express');
var app = express();

app.get('/listUsers', function (req, res) {
    var data = {
       "user1" : {
          "nome" : "Andressa",
          "idade" : 26,
          "id": 1
       },
       "user2" : {
          "nome" : "Cassia",
          "idade" : 30,
          "id": 2
       },
       "user3" : {
          "nome" : "Maisa",
          "idade" : 29,
          "id": 3
       },
       "user4" : {
          "nome" : "Daniel",
          "idade" : 40,
          "id": 4
       },
       "user5" : {
          "nome" : "Leo",
          "idade" : 38,
          "id": 5
       }
    };
    res.send(JSON.stringify(data));
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
});