const express = require('express');
const Hobbits = require('../hobbits/hobbits-modules.js')
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });
  

module.exports = server;