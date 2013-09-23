var util = require('./util');

exports.get = function(req, res) {
  var content = '<form action="post-book" method="post">' +
      '<lable>Title: </lable><input type="text" name="title" /><br />' +
      '<lable>Price: </lable><input type="text" name="price" /><br />' +
      '<lable>Description: </lable><input type="text" name="description" /><br />' +
      '<input type="submit" />' +
      '</form>';
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(util.page('Create Book', content));
  res.end();
};