const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const users = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/users', users);

module.exports = app;