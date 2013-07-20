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
        Tweek : '../backbone_models/tweek',
        TweekList : '../backbone_collections/tweeklist',
        //TweekListTemplate : 'text!../../templates/tweeklist.html',
        //TweekListTemplate : 'text!../templates/tweeklist.html',
        TweekListView : '../backbone_views/tweeklistView'
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
        'Tweek',
        'TweekList',
        'TweekListView',
        'text!../templates/tweeklist.html'
    ],
    function(Tweek, TweekList, TweekListView, testText){
        //testModelSave(Tweek);
        //testCollectionFetch(TweekList);
        testView(TweekListView);
    }
);

var testView = function(TweekListView){
    var view = new TweekListView({el:'#feed-list-box'});
    view.render();
}

var testCollectionFetch = function(TweekList){
    var tweeklist = new TweekList();
    tweeklist.action = 'get';
    tweeklist.fetch(
        {
            data : {
                page : 1
            },
            success : function(collection, response, options){
                console.log('success '+JSON.stringify(response));
            },
            error : function(collection, response, options){
                console.log('error '+JSON.stringify(response));
            }
        }
    );
}

/**测试model save方法 */
var testModelSave = function(Tweek){
    var tweek = new Tweek();
    tweek.action = 'add';
    tweek.save(
        {},
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