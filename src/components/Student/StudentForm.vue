<template>
    <form @submit.prevent="saveStudent">
      <label>Name:</label>
      <input type="text" v-model="name" />
  
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  import studentService from '../../services/studentService';
  
  export default {
    data() {
      return {
        name: '',
      };
    },
    methods: {
      async saveStudent() {
        const studentData = {
          name: this.name,
        };
  
        
        if (this.$route.params.id) {
          await studentService.updateStudent(this.$route.params.id, studentData);
        } else {
          await studentService.addStudent(studentData);
        }
  
        
        this.$router.push({ name: 'StudentList' });
      },
    },
    created() {
      
      if (this.$route.params.id) {
        studentService.getStudentById(this.$route.params.id).then((response) => {
          const student = response.data;
          this.name = student.name;
        });
      }
    },
  };
  </script>
  