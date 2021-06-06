const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const express = require('express');
const router = jsonServer.router('.data/db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;


app.use('/db', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT);