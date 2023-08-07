<template>
    <div>
      <h2>Student List</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.name }}
          <button @click="editStudent(student)">Edit</button>
          <button @click="deleteStudent(student.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import studentService from '../../services/studentService';
  
  export default {
    data() {
      return {
        students: [],
      };
    },
    methods: {
      async fetchStudents() {
        const response = await studentService.getAllStudents();
        this.students = response.data;
      },
  
      async editStudent(student) {
        console.log(student)
      },
  
      async deleteStudent(studentId) {
        console.log(studentId)
      },
    },
    created() {
      this.fetchStudents();
    },
  };
  </script>
  