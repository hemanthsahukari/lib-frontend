import axios from 'axios';

//const BASE_URL = 'http://localhost:8980/api';  

export default {
   getAllBooks() {
     return axios.get("http://localhost:8980/api/books/getAllBooks");
   },

  // getBookById(bookId) {
  //   return axios.get(`${BASE_URL}/books/${bookId}`);
  // },

  // addBook(bookData) {
  //   return axios.post('http://localhost:8980/api/books/createBook', bookData);
  // },

  // updateBook(bookId, bookData) {
  //   return axios.put(`${BASE_URL}/books/${bookId}`, bookData);
  // },

  // deleteBook(bookId) {
  //   return axios.delete(`${BASE_URL}/books/${bookId}`);
  // },
};
