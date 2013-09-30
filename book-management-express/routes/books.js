
/*
 * GET users listing.
 */
var Book = require('../models/book');
exports.bookList = function(req, res){
  var books = Book.find('', function(data) {
    console.log(data);
    res.render('list', { title: 'Book List', books: data });
  });
  
};

exports.createBook = function(req, res){
  res.render('create-book', { title: 'Create Book'});
};

exports.deleteBook = function(req, res){
  var id = req.body.id;
  
  Book.deleteByID(id, function() {
    res.send(JSON.stringify({status: true}));
  });
};

exports.postBook = function(req, res){
  console.log(req.body);
  var book = new Book({title: req.body.title, 
                       price: req.body.price, 
                       description: req.body.description});
  book.save(function() {
    res.send('Create book successfully! <a href="/">Go to list page</a>');
  });
  
};