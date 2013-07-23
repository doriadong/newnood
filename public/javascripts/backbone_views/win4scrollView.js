/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-23
 * Time: PM9:01
 * To change this template use File | Settings | File Templates.
 */


define (

    [
        'backbone',
        'Tweek',
        'TweekList',
        'text!../templates/tweeklist.html'
    ],
    function(_backbone, Tweek, TweekList, TweekListTemplate){
        var TweekListView = Backbone.View.extend(
            {
                el : $(window),//'window',  // remember that the event listeners can only be attached to child elements of the 'el' property
                page : 1,
                initialize : function(){
                    //page : 1
                    this.tweeklist = new TweekList();
                },
                setPage : function(n){
                    this.page = n;
                },
                events : {
                    scroll : 'checkScroll'
                },
                checkScroll : function (){
                    this.page = this.page + 1;
                    console.log(this.page);
                },
                render : function(){
                    var that = this; // view上下文

                    //var tweeklist = new TweekList();
                    this.tweeklist.action = 'get';
                    this.tweeklist.fetch(
                        {
                            data : {
                                page : that.page
                            },
                            success : function(collection, response, options){
                                console.log('success collection :'+JSON.stringify(collection))
                                console.log('success response :'+JSON.stringify(response));
                                var compiledTemplate = _.template(TweekListTemplate, {'tweeklist':response});
                                $('#feed-list-box').append(compiledTemplate);
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