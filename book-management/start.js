var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req, res) {
  var postData = '',
      module,
      pathname;
  console.log(url.parse(req.url).pathname);
  pathname = url.parse(req.url).pathname;
  
  if (pathname === '/create-book') {console.log(111111111111);
    module = './create-book';
  } else if (pathname === '/post-book') {
    module = './post-book';
  } else {
    module = './book-list';
  }
  req.setEncoding('utf8');
  req.addListener('data', function(postDataChunk) {
    postData += postDataChunk;
    console.log('postChunk is: ' + postDataChunk);
  });
  
  req.addListener('end', function() {
    console.log('post data ends.');
    postData = querystring.parse(postData);
    require(module).get(req, res, postData);
  });
  
}).listen(8888);