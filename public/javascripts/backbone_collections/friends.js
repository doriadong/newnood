/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-1
 * Time: PM9:56
 * To change this template use File | Settings | File Templates.
 */


define(
    [
        'backbone',
        'Person'
    ],
    function(_Backbone, Person){
        var Friends = Backbone.Collection.extend({
            model: Person
        });
        return Friends;
    }
);