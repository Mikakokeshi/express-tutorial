const express = require('express');
const app = express();

// third party middleware
var bodyParser = require('body-parser');

// Cookies in express are handled by the modele 'cookie-parser'
var cookieParser = require('cookie-parser');
app.use(cookieParser());
res.cookie(name, 'value', {maxAge: 36000}); //maxAge sets the time limit of the cookie upon creation
res.clearcookie('name'); // will delete the cookie

// 
post = require('./routes/post');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
// app.use(express.jason());
// app.use(express.urlencoded());
// app.use(express.methodO());

app.use(function(req, res, next){
  console.log('my custom middleware!')
  next();
});

// routing

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
// app.get('/posts/:id/edit', post.edit);
// app.put('/posts/:id', post.update);
// app.delete('/posts/:id', post.destroy);
app.listen(3001, function() {
  console.log('Listening on port 3001!');
});
