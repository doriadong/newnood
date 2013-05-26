/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-5-26
 * Time: PM3:10
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');
var _ = require('underscore');

var typeDeterminer = function(key){
    if(key !== null && typeof key === 'string'){
        var location = key.lastIndexOf('_');
        if(location > -1){
            var type = key.substr(location+1);
            var newKey = key.substr(0, location);
            return {
                'type':type,
                'newKey':newKey
            }
        }else{
            return 'NoNeed';
        }
    }else{
        throw new Error('invalid param');
    }
}

var convertTreat = function(value, key, obj){
//    console.log(typeof value);console.log(value);
//    console.log(typeof key);console.log(key);
//    console.log('-----------------------------------');
    var result = typeDeterminer(key);
    if(result !== 'NoNeed'){
        switch (result.type){
            case 'Number':
                var convertValue = numberConverterValue(value);
                obj[result.newKey] = convertValue;
                delete obj[key];
                break;
            case 'Date':
                var convertValue = dateConverterValue(value);
                obj[result.newKey] = convertValue;
                delete obj[key];
                break;
            case 'Boolean':
                var convertValue = booleanConverterValue(value);
                obj[result.newKey] = convertValue;
                delete obj[key];
                break;
            default :
                ;
        }
    }else{
        if(value !== null && _.isArray(value)){
            _.each(value, iteratorTreatObject);
        }else if(value !== null && _.isObject(value) ){
            iteratorTreatObject(value);
        }
    }
}

var iteratorTreatObject = function(obj){
    if(obj !== null && typeof obj === 'object'){
        _.each(obj , convertTreat);
    }
}



var numberConverterValue = function(str){
    if( ! _.isNull(str) && _.isString(str) ){
        num = Number(str);
        if(isNaN(num)){
            throw new Error('invalid param');
        }else{
            return num;
        }
    }else{
        throw new Error('invalid param');
    }
}

var booleanConverterValue = function(str){
    if( ! _.isNull(str) && _.isString(str) ){
        if(str === 'true'){
            return true;
        }else if(str === 'false'){
            return false;
        }else{
            throw new Error('invalid param');
        }
    }else{
        throw new Error('invalid param');
    }
}

var dateConverterValue = function(str){
    if( ! _.isNull(str) && _.isString(str) ){
        return new Date(str);
    }else{
        throw new Error('invalid param');
    }
}

var convertFromJsonString = function(jsonString){
    if(jsonString != null && typeof jsonString === 'string'){
        var obj = JSON.parse(jsonString);
        iteratorTreatObject(obj);
        return obj;
    }else{
        throw new Error('invalid param');
    }
}

var convertFromObj = function(obj){
    if(typeof convertFromObj === 'object'){
        return iteratorTreatObject(obj);
    }else{
        throw new Error('invalid param');
    }
}

exports.convertFromJsonString = convertFromJsonString;
exports.convertFromObj = convertFromObj;