<template>
   <div id="app">
   <header>
    <h1>Library Management</h1>
    <nav v-if="isAuthenticated">
      <router-link to="/books">Books</router-link>
      <router-link to="/authors">Authors</router-link>
      <router-link to="/borrowedbooks">Borrowed Books</router-link>
      <router-link to="/students">Students</router-link>
      <button @click="logout">Logout</button>
    </nav>
  </header>
  <router-view v-if="isAuthenticated" />
  <router-view v-else />
</div>
</template>
<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
  },
 },
 methods: {
  logout() {
    this.$store.dispatch('logout')
    .then(() => {
      this.$router.replace('/login');
})
.catch((error) => {
  console.error('Error logging out:', error); 
  });
 },
},
 };
  </script>
  
  <style></style>
  