/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-5-28
 * Time: AM12:53
 * To change this template use File | Settings | File Templates.
 */


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
            return 'Needless';
        }
    }else{
        throw new Error('invalid param');
    }
}

var iteratorTrimObject = function(obj){
    if(obj !== null && typeof obj === 'object'){
        for(var key in obj){
            var result = typeDeterminer(key);
            if(result !== 'Needless'){
                switch (result.type){
                    case 'Number':
                        var convertValue = numberConverterValue(obj[key]);
                        obj[result.newKey] = convertValue;
                        delete obj[key];
                        break;
                    case 'Date':
                        var convertValue = dateConverterValue(obj[key]);
                        obj[result.newKey] = convertValue;
                        delete obj[key];
                        break;
                    case 'Boolean':
                        var convertValue = booleanConverterValue(obj[key]);
                        obj[result.newKey] = convertValue;
                        delete obj[key];
                        break;
                    default :
                        ;
                }
            }else{
                var value = obj[key];
                if(value !== null && typeof value === 'object'){ //value is Array or Object
                    iteratorTrimObject(value);
                }
            }
        }
    }else{
        throw new Error('invalid param');
    }
}

var numberConverterValue = function(str){
    if(str !== null && typeof str === 'string'){
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
    if(str !== null && typeof str === 'string'){
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
    if(str !== null && typeof str === 'string'){
        return new Date(str);
    }else{
        throw new Error('invalid param');
    }
}

var convertFromJsonString = function(jsonString){
    if(jsonString !== null && jsonString !== '' && typeof jsonString === 'string'){
        var obj = JSON.parse(jsonString);
        iteratorTrimObject(obj);
        return obj;
    }else{
        throw new Error('invalid param');
    }
}

var convertFromObj = function(obj){
    if(obj !== null && typeof convertFromObj === 'object'){
        return iteratorTrimObject(obj);
    }else if(obj === null){
        return null;
    }else{
        throw new Error('invalid param');
    }
}

exports.convertFromJsonString = convertFromJsonString;
exports.convertFromObj = convertFromObj;

exports.middleware = function(){
    return function(req, res, next){
        req.body = convertFromObj(req.body);
        next();
    }
}