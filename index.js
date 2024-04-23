var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('oieeee');
});

app.get('/sobre', function(req, res){
    res.send('sobre mim');
});

app.listen(8081, function(req, res){
    console.log('servidor rodando na porta 8081');
});