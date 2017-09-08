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

exports.new = function(req, res){
  res.render('posts/new');
};

exports.create = function(req, res){
   var post = {
        title: req.title,
        body: req.body
    };

    posts.push(post);
    res.redirect('/');
  };
