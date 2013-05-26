/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-5-23
 * Time: PM9:27
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');

//var mongoose = require('mongoose');
var mongoose = require('./mongooseClient').mongoose;
var mongooseSchema = require('./mongooseSchema');

var schemajs = require('schemajs');

var reviewSchema = mongooseSchema.reviewSchema;

var reviewDemo =
{
    "reviewId" : "133",
    "reviewBody" : "图灵程序设计丛书:iOS 6编程实战》急开发者之所急，揭秘了多数开发类图书未曾展示过的iOS 6高级特性和开发技巧，带你深入了解iOS 6。",
    "price" : { "priceTitle" : "价格", "priceValue" : "34", "unit" : "元" },
    "scores" : [
        {      "scoreTitle" : "环境",      "scoreValue" : "3",      "scoreDescribe" : "好" },
        {      "scoreTitle" : "服务",      "scoreValue" : "3",      "scoreDescribe" : "好" },
        {      "scoreTitle" : "口味",      "scoreValue" : "4",      "scoreDescribe" : "很好" }
    ],
    "tags" : [ { "tagTitle" : "餐厅氛围", "tagValueList" : [ "商务宴请", "朋友聚会" ]  } ]
}

var reviewModel = schemajs.create(
    {
        reviewId : { type:'int', filters:['trim', 'toInt'], required:true, error:'review must has a reviewId' },
        price : {
            type:'object',
            schema:{
                priceValue : { type:'float', filters:['trim', 'toFloat'], properties:{min:0}, error:'priceValue is not a valid priceValue' }
            }
        }
    }
);


var addReview = function(){
    var Review = mongoose.model('reviews', reviewSchema);
    var review = new Review(reviewDemo);
    console.log(util.inspect(review));
    review.save(function(err){
        console.log(err);
    });
}

var findAndModify = function(reviewId){
    mongoose.model('reviews', reviewSchema).findOneAndUpdate({'reviewId':reviewId}, {$inc:{'price.priceValue':100}},
        function(err, nowDoc){
            if(err){
                console.log(err);
            }else{
                console.log('now doc :');
                console.log(nowDoc);
            }
        });
}


//addReview();
//findAndModify(133);
var form = reviewModel.validate(reviewDemo);
console.log(util.inspect(form.data));

