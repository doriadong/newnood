/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-1
 * Time: AM12:57
 * To change this template use File | Settings | File Templates.
 */


/**
 * require(dependencies, callback);
 * dependencies 表示我們要載入的 js ，而其路徑則是相對於 js/main.js ，而且一樣不需要寫副檔名
 */


require.config({

    paths: {
        jquery : '../lib/jquery/jquery-min',
        underscore : '../lib/underscore/underscore-min',
        backbone : '../lib/backbonejs/backbone',
        Person : '../backbone_models/person',
        Friends : '../backbone_collections/friend'
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
        '../pagemodel/mvc',
        'Person'
//        '../lib/jquery/jquery-min',
//        '../lib/underscore/underscore-min',
//        '../lib/backbonejs/backbone'
    ],
    function(mvc, Person){
//        mvc.testJquery();
//        mvc.testUnderscore();
//        mvc.getName();
//        mvc.getAge(23);

//        var person = new Person();
//        person.fetch({ 'success':function(person1, response){
//            alert(person1.aboutMe());
//            person1.set({name:'zhong', age:24});
//            person1.save();
//        }
//        });

        var person2 = new Person();
        person2.fetch({'data':{'id':12344444444444444444444444444444444444444444444444444}, 'success':function(person2){
            alert(person2.aboutMe());
            alert('person2 id : ' + person2.get('id'));
        },
        'error':function(model){
            alert(JSON.stringify(model));
        }
        });

    }
);
