// topics controller (Server side)
// routes get processed here, use topic model (instance of Schema) to query database
// http response from DB is sent as pure JSON to appropriate front end factory
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');