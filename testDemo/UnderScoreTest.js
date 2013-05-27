/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-5-26
 * Time: PM5:44
 * To change this template use File | Settings | File Templates.
 */

var _ = require('underscore');

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

var test_keys = function(){  // keys 未做深度遍历
    var keys = _.keys(reviewDemo);
    for(var index in keys){
        console.log(keys[index]);
    }
}

