
/*
 * GET home page.
 */

var fs = require('fs');

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
    var indexPage = fs.readFileSync('./views/index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(indexPage);
};

exports.success = function(req, res){
    var indexPage = fs.readFileSync('./views/success.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(indexPage);
};

exports.tweek = function(req, res){
    var indexPage = fs.readFileSync('./views/page.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(indexPage);
};