import axios from 'axios';

const BASE_URL = 'http://localhost:8980/h2/api/books'; 

export default {
  getAllBooks() {
    return axios.get(`${BASE_URL}/books`);
  },

  getBookById(bookId) {
    return axios.get(`${BASE_URL}/books/${bookId}`);
  },

  addBook(bookData) {
    return axios.post(`${BASE_URL}/books`, bookData);
  },

  updateBook(bookId, bookData) {
    return axios.put(`${BASE_URL}/books/${bookId}`, bookData);
  },

  deleteBook(bookId) {
    return axios.delete(`${BASE_URL}/books/${bookId}`);
  },
};
