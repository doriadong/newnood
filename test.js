/**
 * Created with JetBrains WebStorm.
 * User: mac
 * Date: 13-5-22
 * Time: PM8:32
 * To change this template use File | Settings | File Templates.
 */

//var testPath = require('./testDemo/PathTest');

//testPath.testPath();



var util = require('util');

var reviewDemoStr = '\
{\
    "reviewId" : "133",\
    "addTime" : "Sat May 25 2013 19:03:37 GMT+0800 (CST)",\
    "reviewBody" : "图灵程序设计丛书:iOS 6编程实战》急开发者之所急，揭秘了多数开发类图书未曾展示过的iOS 6高级特性和开发技巧，带你深入了解iOS 6。",\
    "price" : { "priceTitle" : "价格", "priceValue_Number" : "34", "unit" : "元" },\
    "scores" : [\
        {      "scoreTitle" : "环境",      "scoreValue_Number" : "3",      "scoreDescribe" : "好" },\
        {      "scoreTitle" : "服务",      "scoreValue_Number" : "3",      "scoreDescribe" : "好" },\
        {      "scoreTitle" : "口味",      "scoreValue_Number" : "4",      "scoreDescribe" : "很好" }\
    ],\
    "tags" : [ { "tagTitle" : "餐厅氛围", "isGood_Boolean" : "true", "tagValueList" : [ "商务宴请", "朋友聚会" ]  } ]\
}';

//var reviewDemoStr = util.inspect(reviewDemo);


//console.log(typeof reviewDemoStr)
//console.log(reviewDemoStr);

var conversion = require('./utils/conversion');

var result1 = conversion.convertFromJsonString(reviewDemoStr);
console.log(util.inspect(result1));

//var obj = {a:'test',b:20, c:new Date()};
//console.log(typeof obj);
//if(obj != null && typeof obj === 'object'){
//    for(var key in obj){
//        if(obj.hasOwnProperty(key)){
//            console.log(typeof key);
//            if(key === 'c'){
//                delete obj[key];
//            }
//        }
//    }
//    console.log
//    for(var key in obj){
//        if(obj.hasOwnProperty(key)){
//            console.log(obj[key]);
//        }
//    }
//}
//console.log('ooo'.lastIndexOf('_'));
//console.log(typeof []);
//console.log([] instanceof Array);
//var array = [{a:2},{b:'test'}];
//for(var key in array){
//    //if(obj.hasOwnProperty(key)){
//        console.log(typeof array[key]);
//    //}
//}
//console.log(typeof null);
//console.log(isNaN(Number('3.5rrrr')));
//console.log(Boolean('false')); //useless
//var date = new Date();
//console.log(typeof date);
//date = date + '';//date = '123';
//console.log(date);
//var newDate = new Date(date);
//console.log(typeof newDate);
//console.log(newDate.getDate());

