/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-17
 * Time: PM8:24
 * To change this template use File | Settings | File Templates.
 */

define (

    [
        'backbone',
        'Tweek'
    ],
    function(_backbone, Tweek){
        var TweekList = Backbone.Collection.extend(
            {
                model : Tweek,
                action : 'create',
                url : function(){
                    var u = null;
                    switch(this.action){
                        case 'get':
                            u = '/feed';  // .../feed?page=1
                            break;
                        case 'add':
                            u = '';
                            break;
                        case 'update':
                            u = '';
                            break;
                        case 'delete':
                            u = '';
                            break;
                    }
                    return u;
                },
                initialize : function(){

                }
            }
        );
        return TweekList;
    }


);