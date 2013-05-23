/**
 * Created with JetBrains WebStorm.
 * User: mac
 * Date: 13-5-22
 * Time: PM8:09
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs');
var path = require('path');

//1.路径设置成这样，直接执行本文件，该路径是正确的
//2.如果是外部文件require，那么相当于该模块的代码是写在外部文件里面执行的，在外部文件的上下文情境下该路径就不一定正确了
var realPath1 = '../public/stylesheets/style.css';
var realPath2 = './public/stylesheets/style.css';


var testPath = function(realPath){
    realPath = realPath1;
    fs.exists(realPath, function(exists){
        if(exists){
            console.log('true');
            //return true;
        } else {
            console.log('false');
            //return false;
        }
    });
}

testPath(realPath1);

exports.testPath = testPath;




