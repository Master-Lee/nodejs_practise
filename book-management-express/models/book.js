var setting = require('../setting');
var MongoClient = require('mongodb').MongoClient
    , ObjectID = require('mongodb').ObjectID
    , format = require('util').format; 
var table = 'books';    
var Book = function(book) {
  this.title = book.title;
  this.price = book.price;
  this.description = book.description;
};

module.exports = Book;

Book.prototype.save = function(callback) {
  var book = {
    title: this.title,
    price: this.price,
    description: this.description,
  };
   MongoClient.connect(setting.db, function(err, db) {
    if(err) throw err;

    var collection = db.collection(table);
    
    collection.insert(book, function(err, docs) {
      db.close();
      callback('Post Success!');
    });
  });
}

Book.find = function(query, callback) {

  MongoClient.connect(setting.db, function(err, db) {
    if(err) throw err;

    var collection = db.collection(table);
    // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
        callback(results);
      });
  });
  
}

Book.deleteByID = function(id, callback) {

  MongoClient.connect(setting.db, function(err, db) {
    if(err) throw err;

    var collection = db.collection(table);
    // Locate all the entries using find
      collection.remove({_id: new ObjectID(id)}, function() {
        // Let's close the db
        db.close();
        callback();
      });
        
  });
  
}