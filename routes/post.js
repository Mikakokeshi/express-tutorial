var posts = [
  {title: 'withdrawal', body: 'body0'},
  {title: 'transfer', body: 'body1'},
  {title: 'balance', body: 'body2'}
];



exports.index = function(req, res){
  res.render('posts/index', {posts: posts});
};


exports.show = function(req, res){
  res.render('posts/show', {posts: posts[req.params.id]});
};
