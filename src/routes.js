const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    // Method Add
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // Method Get All
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // Method Get Book by Id
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    // Method Put Book by Id
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    // Method Delete Book
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
