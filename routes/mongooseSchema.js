/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-5-23
 * Time: PM9:00
 * To change this template use File | Settings | File Templates.
 */

//var mongoose = require('mongoose');
var mongoose = require('./mongooseClient').mongoose;
var Schema = mongoose.Schema;

//new Schema({ .. }, { safe: safe });
//By default this is set to true for all schemas which guarentees that any occurring error gets passed back to our callback.
var reviewSchema = new Schema({

    reviewId : Number,
    reviewBody : String,
    scores : [
        {
            _id : false ,
            scoreTitle : String,
            scoreValue : Number,
            scoreDescribe : String
        }
    ],
    price : {
        _id : false ,
        priceTitle : String,
        priceValue : Number,
        unit : String
    },
    tags : [
        {
            _id : false ,
            tagTitle : String,
            tagValueList : [String]
        }
    ]
});


var TweekSchema = new Schema({

    //tweekId : Number,
    userId : Number,
    tweekBody : String,
    addTime : { type: Date, default: Date.now},
    lastTime : { type: Date, default: Date.now},
    commentNum : { type: Number, default: 0},
    VoteNum : { type: Number, default: 0}

});





exports.reviewSchema = reviewSchema;
exports.TweekSchema = TweekSchema;