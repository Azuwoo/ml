var logger     = require('../model/logger.js');

var model = require('../model/db.js'),
    Tank  = model.Tank,
    Test  = model.Test;

exports.index = function(req, res){
  logger.info("no session","acessing top page"); 
  res.render('index');
};

exports.learning_ins = function(req, res){

    logger.info("leargning data comming");

    var newTank = new Tank({
        data    :  req.body.data,
        answer  :  req.body.answer
    });
  
    newTank.save(function(err){
        if(err){
            logger.error("message",err);
        }else{  
            logger.info("message","leaning data inserted successfully");
            logger.info("message",req.body.data + " " + req.body.answer);
            res.send('200');
        }
    });
};


exports.test_ins = function(req, res){

    logger.info("test data comming");

    var newTest = new Test({
        data    :  req.body.data
    });
  
    newTest.save(function(err){
        if(err){
            logger.error("message",err);
        }else{  
            logger.info("message","test data inserted successfully");

            //http://memo.yomukaku.net/entries/uuptBYV
            var exec = require('child_process').exec;

            var child = exec('sudo python python/test.py', function(err, stdout, stderr) {
                if (!err) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr)
                    res.send(stdout);
                }else{
                    res.send(stdout);
                    console.log(err);
                    // err.code will be the exit code of the child process
                    console.log(err.code);
                    // err.signal will be set to the signal that terminated the process
                    console.log(err.signal);
                }
            })
        }
    });
};




exports.learn = function(req, res){

    var exec = require('child_process').exec;

//    var child = exec('sudo python /vagrant/ml/python/learn.py', function(err, stdout, stderr) {
    var child = exec('sudo python python/learn.py', function(err, stdout, stderr) {
        if (!err) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr)
            res.send(stdout  + "<br><br>" + stderr);
        } else {
            res.send(stderr);
            console.log(err);
            // err.code will be the exit code of the child process
            console.log(err.code);
            // err.signal will be set to the signal that terminated the process
            console.log(err.signal);
        }
    })
};

exports.cnt_learn = function(req, res){

    var exec = require('child_process').exec;

    var child = exec('sudo python python/count.py', function(err, stdout, stderr) {
        if (!err) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr)
            res.send(stdout);
        } else {
            res.send(stderr);
            console.log(err);
            // err.code will be the exit code of the child process
            console.log(err.code);
            // err.signal will be set to the signal that terminated the process
            console.log(err.signal);
        }
    })
};


exports.drop_test = function(req, res){

    var exec = require('child_process').exec;

    var child = exec('sudo python python/drop_test.py ' , function(err, stdout, stderr) {
        if (!err) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr)
            res.send(stdout  + "<br><br>" + stderr);
        } else {
            res.send(stderr);
            console.log(err);
            // err.code will be the exit code of the child process
            console.log(err.code);
            // err.signal will be set to the signal that terminated the process
            console.log(err.signal);
        }
    })
};

exports.drop_learn = function(req, res){

    var exec = require('child_process').exec;

    var child = exec('sudo python python/drop_learn.py ' , function(err, stdout, stderr) {
        if (!err) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr)
            res.send(stdout  + "<br><br>" + stderr);
        } else {
            res.send(stderr);
            console.log(err);
            // err.code will be the exit code of the child process
            console.log(err.code);
            // err.signal will be set to the signal that terminated the process
            console.log(err.signal);
        }
    })
};

exports.drop_all = function(req, res){

    var exec = require('child_process').exec;

    var child = exec('sudo python python/drop_all.py ' , function(err, stdout, stderr) {
        if (!err) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr)
            res.send(stdout  + "<br><br>" + stderr);
        } else {
            res.send(stderr);
            console.log(err);
            // err.code will be the exit code of the child process
            console.log(err.code);
            // err.signal will be set to the signal that terminated the process
            console.log(err.signal);
        }
    })
};

exports.get_learn = function(req, res){

    Tank.find({ answer : req.params.type }, function(err, data){
        if(err){
            logger.error(req.session.userid, err);
        }else{
             res.send(data);
        }
    });

};

function consoleBreak(){
    var now = new Date();
    console.log('');
    console.log('');
    console.log(now);    
}
//http://dx.24-7.co.jp/twitterapi1-1-rest-api/
//http://barutangne.hatenablog.com/entry/2014/01/31/192200



