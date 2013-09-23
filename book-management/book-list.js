var util = require('./util');
var model = require('./model');

exports.get = function(req, res, postData) {
  var length;
  var content = '<table><th><td>Title</td><td>Price</td><td>Description</td></th>';
  model.find('books', '', function(books) {
    length = books.length;
    for (var i = 0; i < length; i++) {
      content += '<tr><td>' + books[i].title + '</td>' + 
          '<td>' + books[i].price + '</td>' + 
          '<td>' + books[i].description + '</td>' +
          '</tr>';        
    }
    content += '</table>';
    content += '<a href="/create-book">Create new book</a>';
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(util.page('Create Book', content));
    res.end();
  });
  
};