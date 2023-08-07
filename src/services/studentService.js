import axios from 'axios';

const BASE_URL = 'http://your-backend-url/api'; 
export default {
  getAllStudents() {
    return axios.get(`${BASE_URL}/students`);
  },

  getStudentById(studentId) {
    return axios.get(`${BASE_URL}/students/${studentId}`);
  },

  addStudent(studentData) {
    return axios.post(`${BASE_URL}/students`, studentData);
  },

  updateStudent(studentId, studentData) {
    return axios.put(`${BASE_URL}/students/${studentId}`, studentData);
  },

  deleteStudent(studentId) {
    return axios.delete(`${BASE_URL}/students/${studentId}`);
  },
};
