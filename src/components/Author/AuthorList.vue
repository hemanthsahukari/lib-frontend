<template>
    <div>
      <h2>Author List</h2>
      <ul>
        <li v-for="author in authors" :key="author.id">
          {{ author.name }}
          <button @click="editAuthor(author)">Edit</button>
          <button @click="deleteAuthor(author.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import authorService from '../../services/authorService';
  
  export default {
    data() {
      return {
        authors: [],
      };
    },
    methods: {
      async fetchAuthors() {
        const response = await authorService.getAllAuthors();
        this.authors = response.data;
      },
  
      async editAuthor(author) {
        
        console.log (author)
      },
  
      async deleteAuthor(authorId) {
        console.log (authorId)
      },
    },
    created() {
      this.fetchAuthors();
    },
  };
  </script>
  