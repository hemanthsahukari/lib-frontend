<template>
    <div>
      <h2>{{ book.title }}</h2>
      <p>Author: {{ book.author }}</p>
      <p>Genre: {{ book.genre }}</p>
      <p v-if="book.available">Available</p>
      <p v-else>Not Available</p>
    </div>
  </template>
  
  <script>
  import bookService from '../../services/bookService';
  
  export default {
    data() {
      return {
        book: null,
      };
    },
    methods: {
      async fetchBook() {
        const bookId = this.$route.params.id;
        const response = await bookService.getBookById(bookId);
        this.book = response.data;
      },
    },
    created() {
      this.fetchBook();
    },
  };
  </script>