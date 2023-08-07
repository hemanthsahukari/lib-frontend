<template>
    <div>
      <h2>{{ student.name }}</h2>
      <p>Number of Borrowed Books: {{ student.borrowedBooks.length }}</p>
      <p>Fine Amount: {{ student.fineAmount }}</p>
    </div>
  </template>
  
  <script>
  import studentService from '../../services/studentService';
  
  export default {
    data() {
      return {
        student: null,
      };
    },
    methods: {
      async fetchStudent() {
        const studentId = this.$route.params.id;
        const response = await studentService.getStudentById(studentId);
        this.student = response.data;
      },
    },
    created() {
      this.fetchStudent();
    },
  };
  </script>
  
  