/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 13-7-8
 * Time: PM8:24
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');

var mongoose = require('./mongooseClient').mongoose;
var mongooseSchema = require('./mongooseSchema');

var Tweek = mongoose.model('Tweek', mongooseSchema.TweekSchema);


exports.addTweek = function(req, res){
    var tweekContent = req.body;
    var tweek = new Tweek(tweekContent);

    tweek.save(function(err){
        if(err){
            console.log('addTweek something wrong!');
            res.writeHead(500, {'Content-type': 'text/json;charset=utf-8'} );
            res.end({code:500,msg:'addTweek something wrong!'});
        }else{
            console.log(util.inspect(tweek));
            res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
            //tweek.userId = 301;
            //res.end(util.inspect(tweek));
            //res.end(util.inspect({'head':'ok'}));
            //res.json({'head':'ok'});
            res.write(JSON.stringify(tweek));
            res.end();
        }
    });
}

exports.getFeedByPage = function(req, res){
    var queryParam = req.query;
    var page = queryParam.page;
    if(page <= 0){
        page = 1;
    }
    var pageSize = 3;
    var start = (page-1)*pageSize;

    var query = Tweek.find()
        .where('userId').gt(4000).lt(8000)
        .where('commentNum').equals(0)
        .skip(start)
        .limit(pageSize)
        .sort('-addTime');

    query.select('_id userId tweekBody VoteNum addTime');

    query.exec(
        function(err,datas){
            if(err){
                console.log('getFeedByPage something wrong!');
                res.writeHead(500, {'Content-type': 'text/json;charset=utf-8'} );
                res.end({code:500,msg:'getFeedByPage something wrong!'});
            }else{
                console.log(util.inspect(datas));
                res.writeHead(200, {'Content-type': 'text/json;charset=utf-8'} );
                res.write(JSON.stringify(datas));
                res.end();
            }
        }
    );


}





//-------------------test------------------------------

var testSave = function(){
    var tweekContent = {
        'userId' : '101',
        'tweekBody' : '今天多喝水！'
    };
    var tweek = new Tweek(tweekContent);

    console.log(tweek._id);

    tweek.save(function(err){
        if(err){
            console.log('something wrong!')
        }else{
            console.log(util.inspect(tweek));
        }
    });
}

var testGetPage = function(){
    var page = 1;
    var pageSize = 3;
    var start = (page-1)*pageSize;

    var query = Tweek.find()
        .where('userId').gt(4000).lt(8000)
        .where('commentNum').equals(0)
        .skip(start)
        .limit(pageSize)
        .sort('-addTime');

    query.select('_id userId tweekBody VoteNum addTime');

    query.exec(
        function(err,datas){
            if(err){
                console.log('getFeedByPage something wrong!');
            }else{
                console.log(util.inspect(datas));
            }
        }
    );
}

//test();
//testGetPage();