var util = require('./util');
var model = require('./model');
exports.get = function(req, res, postData) {
  
  model.save('books', postData, function(content) {
    content += '<p> Your submit data is: ' + JSON.stringify(postData) + '</p>';
    content += '<br /><a href="/book-list">Return to List</a>';
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(util.page('Create Book', content));
    res.end();
  });
  
};