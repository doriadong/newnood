/**
 * Created with JetBrains WebStorm.
 * User: mac
 * Date: 13-5-12
 * Time: PM12:31
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb');

var db = new mongo.Db('schemaTest', new mongo.Server('localhost', 27017, {auto_reconnect: true}));

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'schemaTest' database");
        db.collection('reviews', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'reviews' collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});

exports.dbClient=db;
