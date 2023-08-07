<template>
    <div>
      <h2>{{ borrowedBook.book.title }}</h2>
      <p>Student: {{ borrowedBook.student.name }}</p>
      <p>Borrow Date: {{ borrowedBook.borrowDate }}</p>
      <p>Return Date: {{ borrowedBook.returnDate }}</p>
      <p v-if="borrowedBook.returned">Returned</p>
      <p v-else>Not Returned</p>
      <p v-if="borrowedBook.fineCollected">Fine Collected</p>
      <p v-else>Fine Not Collected</p>
    </div>
  </template>
  
  <script>
  import borrowedbookService from '../../services/borrowedbookService';
  
  export default {
    data() {
      return {
        borrowedBook: null,
      };
    },
    methods: {
      async fetchBorrowedBook() {
        const borrowedBookId = this.$route.params.id;
        const response = await borrowedbookService.getBorrowedBookById(borrowedBookId);
        this.borrowedBook = response.data;
      },
    },
    created() {
      this.fetchBorrowedBook();
    },
  };
  </script>