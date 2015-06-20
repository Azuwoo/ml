//http://rei19.hatenablog.com/entry/2013/12/30/135807

var model = require('../model/db.js'),
    Log  = model.Log;


// アプリケーションログ
exports.info = function(user_id,str){
    console.log(user_id + " | " + str);
    var newLog = new Log({
        user_id  :  user_id,
        type     :  'i',
        message  :  str
    });
    newLog.save();
};

// エラーログ（警告レベル）
exports.warn = function(user_id,str){
    console.log(user_id + " | " + str);
    var newLog = new Log({
        user_id  :  user_id,
        type     :  'w',
        message  :  str
    });
    newLog.save();
};
// エラーログ（エラーレベル）
exports.error = function(user_id,str){
    console.log(user_id + " | " + str);
    var newLog = new Log({
        user_id  :  user_id,
        type     :  'e',
        message  :  str
    });
    newLog.save();
};
