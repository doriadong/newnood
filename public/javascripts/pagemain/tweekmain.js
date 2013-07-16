/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-14
 * Time: PM8:43
 * To change this template use File | Settings | File Templates.
 */


require.config({

    paths: {
        jquery : '../lib/jquery/jquery-min',
        underscore : '../lib/underscore/underscore-min',
        backbone : '../lib/backbonejs/backbone',
        Tweek : '../backbone_models/tweek'
//        Friends : '../backbone_collections/friend'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

});


require(
    [
        'Tweek'
    ],
    function(Tweek){


    }
);

/**测试model save方法 */
var testModelSave = function(Tweek){
    var tweek = new Tweek();
    tweek.save(
        {'VoteNum':20},
        {
            //wait: true,
            success : function(model,response){
                //console.log('success tweekBody:'+model.tweekBody);
                console.log('success tweekBody'+JSON.stringify(response.tweekBody));
            },
            error : function(model,response){
                console.log('model:'+JSON.stringify(model));
                console.log('response:'+JSON.stringify(response));
            }
        }
    );
}