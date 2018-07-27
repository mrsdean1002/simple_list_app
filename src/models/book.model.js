// Load mongoose package
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    published: String,
    created_at: { type: Date, default: Date.now },
    deleted: {type: Boolean, default: false}
  });

  const Book = mongoose.model("Book", BookSchema);

Book.count({}, function(err, count) {
  if (err) {
    throw err;
  }
 
  if (count > 0) return ;

  const books = require('./book.seed.json');
  Book.create(books, function(err, newBook) {
    if (err) {
      throw err;
    }
    console.log("DB seeded")
  });
});









module.exports = Book;