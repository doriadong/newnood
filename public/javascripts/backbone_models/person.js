/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-1
 * Time: PM5:55
 * To change this template use File | Settings | File Templates.
 */

define(
    [
        'backbone'
    ],
    function(){
        var Person = Backbone.Model.extend({
            url: '/person',
            //url: '/person' + getPersonId(),
            initialize: function(){
                alert('create one account');
//                this.bind('change:name', this.save);
//                this.bind('error', this.log);
//                this.bind('invalid', this.log);
                //alert('bind end');
            },
            defaults: {
                img : 'default.img',
                sex : 'man'
            },
            //By default validate is called before save, but can also be called before set if {validate:true} is passed
            validate: function(attributes){
                if(this.get('name') === null){
                    return 'account can not without name!'
                }else{
                    alert('validate pass');
                }
            },

            aboutMe : function(){
                return 'my name is ' + this.get('name') + ' my sex is ' + this.get('sex') + ' , Hello!'
            },
            log : function(model, error){
                alert(error);
            }
        });
        return Person;
    }
);

//第一种情况,如果直接使用 fetch 方法,那么他会发送 get 请求到你 model 的 url 中,
//你在服务器端可以通过判断是 get 还是 post 来进行对应的操作。 fetch();
//第二种情况,在 fetch 中加入参数,如下: fetch({url:'/getmans/'});
//这样,就会发送 get 请求到/getmans/这个 url 中,
