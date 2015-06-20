
/**
 * Module dependencies.
 */

var express = require('express');

/* controller */
var routes = require('./routes');

/* modules */
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));

/* define views */
app.set('views',__dirname + '/views');
app.set('view engine','ejs');			//manually added
app.use(express.static(__dirname + '/public')); //manually added

/* 以下、使用していないものも有ります */
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.multipart());      // manually added
app.use(express.bodyParser());     // manually added

app.use(express.static(path.join(__dirname, 'public')));

var MongoStore = require('connect-mongo')(express);
app.use(express.cookieParser()); //追加
app.use(app.router);   


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.post('/insert/learn', routes.learning_ins);
app.post('/insert/test', routes.test_ins);
app.get('/learn', routes.learn);
app.get('/drop/test', routes.drop_test);
app.get('/drop/learn', routes.drop_learn);
app.get('/drop/all', routes.drop_all);
app.get('/count/learn', routes.cnt_learn);
app.get('/get/learndata/:text?', routes.get_learn);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/* process page not found */

app.use(function(req, res, next){
  res.status(404);
  res.render('err',{ message : "404 Page not found..."});
});

app.use(function(err, req, res, next){
  res.status(500);
  res.render('err',{ message : "500 Page not found..."});
});
