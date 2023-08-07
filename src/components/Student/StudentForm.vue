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
  
        // Call the appropriate API method based on whether this is an add or edit operation
        if (this.$route.params.id) {
          await studentService.updateStudent(this.$route.params.id, studentData);
        } else {
          await studentService.addStudent(studentData);
        }
  
        // After successful save, redirect to the student list page
        this.$router.push({ name: 'StudentList' });
      },
    },
    created() {
      // If this is an edit operation, fetch the student details to populate the form
      if (this.$route.params.id) {
        studentService.getStudentById(this.$route.params.id).then((response) => {
          const student = response.data;
          this.name = student.name;
        });
      }
    },
  };
  </script>
  