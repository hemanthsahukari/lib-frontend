<template>
    <div>
      <h2>LoginPage</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import LoginComponent from './Login.vue'
  export default {
    name:LoginComponent,
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      loginUser() {
        const userData = {
          username: this.username,
          password: this.password,
        };
  
        this.$store.dispatch('login', userData)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Login error:', error);
          });
      },
    },
  };
  </script>