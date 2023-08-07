<template>
    <form @submit.prevent="saveAuthor">
      <label>Name:</label>
      <input type="text" v-model="name" />
  
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  import authorService from '../../services/authorService';
  
  export default {
    data() {
      return {
        name: '',
      };
    },
    methods: {
      async saveAuthor() {
        const authorData = {
          name: this.name,
        };
        if (this.$route.params.id) {
          await authorService.updateAuthor(this.$route.params.id, authorData);
        } else {
          await authorService.addAuthor(authorData);
        }
  
        
        this.$router.push({ name: 'AuthorList' });
      },
    },
    created() {
      if (this.$route.params.id) {
        authorService.getAuthorById(this.$route.params.id).then((response) => {
          const author = response.data;
          this.name = author.name;
        });
      }
    },
  };
  </script>