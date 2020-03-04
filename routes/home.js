var express = require('express');
var home = express.Router();


home.get('/', (req, res) => {
    res.send('Avengers Assemble');
});

module.exports = home;
