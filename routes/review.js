/**
 * Created with JetBrains WebStorm.
 * User: mac
 * Date: 13-5-11
 * Time: AM1:36
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');
var fs = require('fs');

var dbClient = require('./mongoNativeClient').dbClient;
var reviewsCollection = dbClient.collection('reviews');

exports.addReview = function(req, res){
    console.log(req.body);
    var scores = JSON.parse(req.body.jsonString);  console.log(scores);

    var review = {};
    review.reviewId = 114;
    review.reviewBody = req.body.reviewBody;
    review.scores = scores;
    review.addDate = new Date();

    reviewsCollection.insert(review, {safe:true}, function(err, result){  //safe:true Should always set if you have a callback.
        res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
        //res.end(util.inspect(req.body));
        res.end(util.inspect(result));
    });

}

exports.addReviewWithFiles = function(req, res){
    var body = req.body;
    var files = req.files;
    var imgfile = null;
    console.log(body);
    console.log(files);
    if(files != null){
        imgfile = files.imgfile;
        console.log('---------------');
        console.log(imgfile);
//        fs.writeFile('./file/'+imgfile.filename, imgfile, function(err)
        fs.readFile(imgfile.path, function(err, data){
            if (err) throw err;
            fs.writeFile('./file/'+imgfile.name, data, function(err){
                if (err) throw err;
                console.log('It\'s saved!');
            });
        });

    }
    res.send(imgfile);
}

exports.findReviewByID = function(req, res){
    var review = {
        userId:1,
        reviewId:110,
        reviewBody:'在繁华的南京路，朋友几年前就劝我去，一直没找到那种机会。',
        scores:[
            {scoreTitle:'口味', scoreValue:3, scoreDescribe:'好'},
            {scoreTitle:'环境', scoreValue:4, scoreDescribe:'很好'},
            {scoreTitle:'服务', scoreValue:3, scoreDescribe:'好'}
        ]
    }
    console.log(req);
    //console.log(review);
    //if(req.params.id == review.reviewId){ //params: [ id: '110' ]  String类型的 转型匹配的
    if(parseInt(req.params.id) === review.reviewId){
        res.send(review);
    }else{
        res.send('can not find this review');
    }
    res.end();

}

exports.findReviewByIDFromDB = function(req, res){
    //var cursor = collection.find(query, [fields], options);
    //reviewsCollection.find({reviewId:parseInt(req.params.id)})
//    reviewsCollection.findOne({scores:{$elemMatch:{scoreValue:{$gt:2}, scoreDescribe:'好'}}},
//        {className:0}, function(err, result){
    reviewsCollection.findOne({reviewId:parseInt(req.params.id)},{className:0}, {safe:true}, function(err, result){
        if(err) return res.end(err);
        res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
        res.end(util.inspect(result));
    });
}

exports.addPriceByReviewID = function(req, res){
    //console.log(req);
    if(req.params.id != null){
        var reviewId = parseInt(req.params.id);
        reviewsCollection.update({'reviewId':{$gt:reviewId}}, {$inc:{'price.priceValue':1}}, {safe:true, multi:true}, function(err, updateCount){
            if (err){
                console.warn(err.message);
                res.end(err);
            }else{
                console.log('successfully updated');
                res.end(util.inspect(updateCount));
            }
        });
    }else{
        res.end('with out param');
    }

}












