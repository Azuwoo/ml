var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
  
var url = 'mongodb://localhost/ml';

var db  = mongoose.createConnection(url, function(err, res){
    if(err){
        console.log('Error connected: ' + url + ' - ' + err);
    }else{
        console.log('Success connected: ' + url);
    }
});


// LearningData Modelの定義
var TankSchema = new mongoose.Schema({
    data   : String,
    answer   : String,
    created : { type: Date, default: Date.now }
},{collection: 'tank'});

exports.Tank = db.model('Tank', TankSchema);

// TestData Modelの定義
var TestSchema = new mongoose.Schema({
    data   : String,
    created : { type: Date, default: Date.now }
},{collection: 'test'});

exports.Test = db.model('test', TestSchema);

// Log
var LogSchema = new mongoose.Schema({
    user_id        : String,
    type           : String,
    message        : String,
    created        :  { type: Date, default: Date.now }
},{collection: 'log'});

exports.Log = db.model('Log', LogSchema);