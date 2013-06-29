/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-6-29
 * Time: PM6:36
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
    , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    //这个cookieParser是express提供的一个分析Cookie信息，并将信息保存在req.cookie中的中间件
    //如想通过req.cookie获得cookie的值，一定要加这句
    app.use(express.cookieParser('my secret here'));
    app.use(express.bodyParser());

    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});


//设置缺省响应
app.get('/', function(req, res){
       //直接通过req.cookies.key获取对应cookies中记录的value值
       if (req.cookies.remember) {
             res.send('Remembered :)  Click to <a href="/forget">forget</a>!. secure:'+req.signedCookies.name);
       } else {
             res.send('<form method="post"><p>Check to <label>'
               + '<input type="checkbox" name="remember"/> remember me</label> '
               + '<input type="submit" value="Submit"/>.</p></form>');
       }
});

app.post('/', function(req, res){
       var minute = 60000;
       //输入key值,value值,第三个参数为cookie的设置
       //例如:res.cookie('name', 'laodoujiao', { domain: '.cnblog.com', path: '/admin', secure: true,expires: new Date(Date.now() + 900000), httpOnly: true,maxAge:900000 });
       //注意maxAge这个参数，这是为了方便设置cookie的过期时间而设置的一个简易参数，已毫秒为单位
       console.log(req.body.remember);
       if (req.body.remember){
           res.cookie('remember', 1, { maxAge: minute });
           res.cookie('name', 'zhongliangjun', { maxAge: minute, signed: true });
       }
           res.redirect('back');
       });

app.listen(app.get('port'));

