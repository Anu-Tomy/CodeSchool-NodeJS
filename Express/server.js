var url = require('url');
var request = require('request');
var express = require('express');
var app = express();
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
app.get('/', function(req, res){
  request(searchURL).pipe(res);
});
var app; // Create server here
app.listen(8080);