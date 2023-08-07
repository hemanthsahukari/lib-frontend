<template>
    <div>
      <h2>{{ author.name }}</h2>
    </div>
  </template>
  
  <script>
  import authorService from '../../services/authorService';
  
  export default {
    data() {
      return {
        author: null,
      };
    },
    methods: {
      async fetchAuthor() {
        const authorId = this.$route.params.id;
        const response = await authorService.getAuthorById(authorId);
        this.author = response.data;
      },
    },
    created() {
      this.fetchAuthor();
    },
  };
  </script>
  