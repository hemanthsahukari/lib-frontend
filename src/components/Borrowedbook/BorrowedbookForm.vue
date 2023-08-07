<template>
    <form @submit.prevent="saveBorrowedBook">
      <label>Book:</label>
      <!-- Implement a select input to choose a book from the available books -->
  
      <label>Student:</label>
      <!-- Implement a select input to choose a student from the available students -->
  
      <label>Borrow Date:</label>
      <input type="date" v-model="borrowDate" />
  
      <label>Return Date:</label>
      <input type="date" v-model="returnDate" />
  
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  import borrowedbookService from '../../services/borrowedbookService';
  
  export default {
    data() {
      return {
        // Implement data properties to store selected book, student, and form inputs (borrowDate, returnDate)
      };
    },
    methods: {
      async saveBorrowedBook() {
        const borrowedBookData = {
          // Populate borrowedBookData with selected book, student, borrowDate, and returnDate
        };
  
        // Call the appropriate API method based on whether this is an add or edit operation
        if (this.$route.params.id) {
          await borrowedbookService.updateBorrowedBook(this.$route.params.id, borrowedBookData);
        } else {
          await borrowedbookService.addBorrowedBook(borrowedBookData);
        }
  
        // After successful save, redirect to the borrowed book list page
        this.$router.push({ name: 'BorrowedbookList' });
      },
    },
    created() {
      // Implement code to fetch and populate available books and students for select inputs
    },
  };
  </script>
  