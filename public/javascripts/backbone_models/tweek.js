/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-14
 * Time: PM11:02
 * To change this template use File | Settings | File Templates.
 */


define (
    [
        'backbone'
    ],
    function(){
        var Tweek = Backbone.Model.extend(
            {
                idAttribute : '_id',
                url : function(){
                    return '/tweek/add'
                },
                initialize : function(){

                },
                defaults: {
                    'userId' : '201',
                    'tweekBody' : '今天多喝水哈！'
                }
//                parse: function(resp, options) {
//                    console.log('resp:---------')
//                    console.log(JSON.stringify(resp));
//                    return resp;
//                }
            }
        );
        return Tweek;
    }
);
