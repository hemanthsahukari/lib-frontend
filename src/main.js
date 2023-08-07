import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoginComponent from './components/Auth/Login.vue';
import SignupComponent from './components/Auth/Signup.vue';

createApp(App)
.component('LoginComponent', LoginComponent) 
.component('SignupComponent', SignupComponent) 
.use(router)
.use(store)
.mount('#app');