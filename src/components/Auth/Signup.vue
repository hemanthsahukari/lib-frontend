<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signupUser">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import SignupComponent from './Signup.vue'
  export default {
    name:SignupComponent,
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      signupUser() {
        if (this.password !== this.confirmPassword) {

          return;
        }
  
        const userData = {
          username: this.username,
          password: this.password,
        };
  
        this.$store.dispatch('signup', userData)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Signup error:', error);
          });
      },
    },
  };
  </script>