exports.save = function(collectionName, data, callback) {
  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;    

  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection(collectionName);
    collection.insert(data, function(err, docs) {
      db.close();
      callback('Post Success!');
    });
  });
};

exports.find = function(collectionName, query, callback) {
  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection(collectionName);
    // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
        callback(results);
      });
  });
  
}