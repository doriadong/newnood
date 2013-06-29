/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-1
 * Time: AM12:25
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs');
var util = require('util');

exports.mvcIndex = function(req, res){
    var indexPage = fs.readFileSync('./views/mvcDemo1.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(indexPage);
}

exports.updatePerson = function(req, res){
    //var id = req.params.id;
    var person = req.body;
    console.log('change name so save it !');
    console.log('get id :' + id);
    console.log(util.inspect(person));
    res.end(util.inspect(person));
}

exports.getPerson = function(req, res){
    console.log(util.inspect(req.query));
    var id = req.query.id;
    if( id !== null){
        var person = {
            'id' : id,
            'name' : 'hui',
            'age' : 22,
            'sex' : 'woman'
        }
        console.log('get one person by id : ' + id);
    }else{
        var person = {
            'name' : 'dajun',
            'age' : 22,
            'sex' : 'man'
        }
        console.log('get one person without id');
    }

    res.end(JSON.stringify(person));
}

