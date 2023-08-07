<template>
<div>
    <h2>Borrowed Book List</h2>
    <ul>
      <li v-for="borrowedBook in borrowedBooks" :key="borrowedBook.id">
        Book: {{ borrowedBook.book.title }} ({{ borrowedBook.book.author }})
        Student: {{ borrowedBook.student.name }}
        Borrow Date: {{ borrowedBook.borrowDate }}
        Return Date: {{ borrowedBook.returnDate }}
        <button @click="editBorrowedBook(borrowedBook)">Edit</button>
        <button @click="deleteBorrowedBook(borrowedBook.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import borrowedbookService from '../../services/borrowedbookService';

export default {
  
  data() {
    return {
      borrowedBooks: [],
    };
  },
  methods: {
    async fetchBorrowedBooks() {
      const response = await borrowedbookService.getAllBorrowedBooks();
      this.borrowedBooks = response.data;
    },

    async editBorrowedBook(borrowedBook) {
      // Implement edit functionality
    },

    async deleteBorrowedBook(borrowedBookId) {
      // Implement delete functionality
    },
  },
  created() {
    this.fetchBorrowedBooks();
  },
};
</script>