<template>
    <form @submit.prevent="saveBorrowedBook">
      <label>Book:</label>
      
  
      <label>Student:</label>
      
  
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
      };
    },
    methods: {
      async saveBorrowedBook() {
        const borrowedBookData = {
        };
  
        if (this.$route.params.id) {
          await borrowedbookService.updateBorrowedBook(this.$route.params.id, borrowedBookData);
        } else {
          await borrowedbookService.addBorrowedBook(borrowedBookData);
        }
  
        this.$router.push({ name: 'BorrowedbookList' });
      },
    },
    created() {
    },
  };
  </script>
  