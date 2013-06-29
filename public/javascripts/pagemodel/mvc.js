/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-1
 * Time: PM12:37
 * To change this template use File | Settings | File Templates.
 */




/**
 * define(id?, dependencies?, factory);
 * dependencies 是一个数组，表示所依赖的模块
 * factory 是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
 * require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。
 */

define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function () {









    return {
        getName : function () {
            //console.log($);
            alert('my mvc model name is : zhong');
        },
        getAge : function(value){
            alert('my age is :'+value);
        },
        testUnderscore : function(){
            alert('begin');
            var array = [1, 2];
            _.each(array, alert);
            alert('end');
        },
        testJquery : function(){
            $('#hello').hide();
        }
    }
});
