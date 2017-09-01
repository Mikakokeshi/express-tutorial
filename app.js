const express = require('express');
const app = express();

post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

// middleware
// app.use(express.jason());
// app.use(express.urlencoded());
// app.use(express.methodO());

app.use(function(req, res, next){
  console.log('my custom middleware!')
  next();
});

// routing

app.get('/', post.index);
app.get('/posts/:id', post.show);
// app.get('/posts/new', post.new);
// app.post('/posts/create', post.create);
// app.get('/posts/:id/edit', post.edit);
// app.put('/posts/:id', post.update);
// app.delete('/posts/:id', post.destroy);


app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
