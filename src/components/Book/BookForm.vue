<template>
    <form @submit.prevent="saveBook">
      <label>Title:</label>
      <input type="text" v-model="title" />
  
      <label>Author:</label>
      <input type="text" v-model="author" />
  
      <label>Genre:</label>
      <input type="text" v-model="genre" />
  
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  import bookService from '../../services/bookService';
  
  export default {
    data() {
      return {
        title: '',
        author: '',
        genre: '',
      };
    },
    methods: {
      async saveBook() {
        const bookData = {
          title: this.title,
          author: this.author,
          genre: this.genre,
          available: true, 
        };
  
        
        if (this.$route.params.id) {
          await bookService.updateBook(this.$route.params.id, bookData);
        } else {
          await bookService.addBook(bookData);
        }
  
        
        this.$router.push({ name: 'BookList' });
      },
    },
    created() {
      
      if (this.$route.params.id) {
        bookService.getBookById(this.$route.params.id).then((response) => {
          const book = response.data;
          this.title = book.title;
          this.author = book.author;
          this.genre = book.genre;
        });
      }
    },
  };
  </script>
  