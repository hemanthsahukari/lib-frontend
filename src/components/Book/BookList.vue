<template>
    <div>
      <h2>Book List</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.title }} by {{ book.author }}
          <button @click="fetchBooks(book)">Edit</button>
          <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import bookService from '../../services/bookService';
  
  export default {
    data() {
      return {
        books: [],
      };
    },
    methods: {
      async fetchBooks() {
        const response = await bookService.getAllBooks();
        this.books = response.data;
      },
  
      async editBook(book) {
        console.log(book)
        
      },
  
      async deleteBook(bookId) {
        console.log(bookId)
        
      },
    },
    created() {
      this.fetchBooks();
    },
  };
  </script>
  