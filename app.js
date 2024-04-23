var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('oieeee');
});

app.get('/sobre', function(req, res){
    res.send('sobre mim');
});

app.get('/sobre/:id', function(req, res){
    res.send("oi " + req.params.id);
});

app.get('/sobre/:id/:conteudo', function(req, res){
    res.send(req.params);
});

app.listen(8081, function(req, res){
    console.log('servidor rodando na porta 8081');
});