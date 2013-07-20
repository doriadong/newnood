/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-19
 * Time: PM8:50
 * To change this template use File | Settings | File Templates.
 */

define (

    [
        'backbone',
        'Tweek',
        'TweekList',
        //'TweekListTemplate'
        'text!../templates/tweeklist.html'
    ],
    function(_backbone, Tweek, TweekList, TweekListTemplate){
        var TweekListView = Backbone.View.extend(
            {
                initialize : function(){
                    page : 1
                },
                setPage : function(n){
                    this.page = n;
                },
                render : function(){
                    var that = this; // view上下文

                    var tweeklist = new TweekList();
                    tweeklist.action = 'get';
                    tweeklist.fetch(
                        {
                            data : {
                                page : that.page
                            },
                            success : function(collection, response, options){
                                console.log('success '+JSON.stringify(response));
                                var compiledTemplate = _.template(TweekListTemplate, {'tweeklist':response});
                                $(that.el).html(compiledTemplate);
                            },
                            error : function(collection, response, options){
                                console.log('error '+JSON.stringify(response));
                            }
                        }
                    );
                }
            }
        );
        return TweekListView;
    }


);