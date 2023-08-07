import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/Auth/Login.vue';
import Signup from '../components/Auth/Signup.vue';

import BookList from '../components/Book/BookList.vue';
import BookForm from '../components/Book/BookForm.vue';
import BookItem from '../components/Book/BookItem.vue';

import AuthorList from '../components/Author/AuthorList.vue';
import AuthorForm from '../components/Author/AuthorForm.vue';
import AuthorItem from '../components/Author/AuthorItem.vue';

import BorrowedbookList from '../components/Borrowedbook/BorrowedbookList.vue';
import BorrowedbookForm from '../components/Borrowedbook/BorrowedbookForm.vue';
import BorrowedbookItem from '../components/Borrowedbook/BorrowedbookItem.vue';

import StudentList from '../components/Student/StudentList.vue';
import StudentForm from '../components/Student/StudentForm.vue';
import StudentItem from '../components/Student/StudentItem.vue';



const routes = [
  { path: '/', redirect: '/books' },
  { path: '/books', name: 'BookList', component: BookList },
  { path: '/books/add', name: 'AddBook', component: BookForm },
  { path: '/books/edit/:id', name: 'EditBook', component: BookForm },
  { path: '/books/:id', name: 'BookItem', component: BookItem },
  { path: '/authors', name: 'AuthorList', component: AuthorList },
  { path: '/authors/add', name: 'AddAuthor', component: AuthorForm },
  { path: '/authors/edit/:id', name: 'EditAuthor', component: AuthorForm },
  { path: '/authors/:id', name: 'AuthorItem', component: AuthorItem },
  { path: '/borrowed-books', name: 'BorrowedbookList', component: BorrowedbookList },
  { path: '/borrowed-books/add', name: 'AddBorrowedbook', component: BorrowedbookForm },
  { path: '/borrowed-books/edit/:id', name: 'EditBorrowedbook', component: BorrowedbookForm },
  { path: '/borrowed-books/:id', name: 'BorrowedbookItem', component: BorrowedbookItem },
  { path: '/students', name: 'StudentList', component: StudentList },
  { path: '/students/add', name: 'AddStudent', component: StudentForm },
  { path: '/students/edit/:id', name: 'EditStudent', component: StudentForm },
  { path: '/students/:id', name: 'StudentItem', component: StudentItem },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;