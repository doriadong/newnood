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
        TweekListView : '../backbone_views/tweeklistView',
        Win4ScrollView : '../backbone_views/win4scrollView'
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
        'Win4ScrollView'
    ],
    function(Tweek, TweekList, TweekListView, Win4ScrollView){
        //testModelSave(Tweek);
        //testCollectionFetch(TweekList);
        //testView(TweekListView);
        testScroll(Win4ScrollView);
    }
);

/**测试 view**/
var testView = function(TweekListView){
    var view = new TweekListView({el:'#feed-list-box'});
    view.render();
}

var testScroll = function(Win4ScrollView){
    var view = new Win4ScrollView();
    view.render();
}

/**测试collection fetch方法**/
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
    console.log('initialize :'+ JSON.stringify(tweek));
    tweek.action = 'add';
    //tweek.set({action:'add'});
    tweek.set({tweekBody:'最近想找一个single-page JavaScript application Framework'});
    //Please use set to update the attributes instead of modifying them directly
    //tweek.setTweekBody('DHL服务好，3-6天就可收到，选择dotdotbuy寄送，要比自己寄便宜很多哦。'); 这样有问题哦
    console.log('after initialize reset action:'+ JSON.stringify(tweek));
    tweek.save(
        {},
        {
            //wait: true,
            success : function(model,response){
                console.log('success model :'+ JSON.stringify(model));
                console.log('success response :'+JSON.stringify(response));
            },
            error : function(model,response){
                console.log('model:'+JSON.stringify(model));
                console.log('response:'+JSON.stringify(response));
            }
        }
    );
}