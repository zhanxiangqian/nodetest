var express = require('express')

var fortune = require("./lib/fortune.js") 
var app = express();

var handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine)

app.use(function(req,res,next){
  res.locals.showTests = app.get("env") !== "production" && req.query.test === "1";
  next();
})


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
})

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/about', function (req, res) {
  res.render('about',{
    fortune: fortune.getFortune(),
    pageTestScript:'/qa/tests-about.js'
  });
})

app.use(function (req, res, next) {
  res.status(404)
  res.render("404")
})


app.listen(app.get('port'), function () {
  console.log('nodetest run...')
})
