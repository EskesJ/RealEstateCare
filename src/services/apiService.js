// Import Axios
import axios from 'axios';
import Inspection from './inspection';

const apiService = {
  baseUrl: 'https://my-json-server.typicode.com/EskesJ/RealEstateCare',

  // Fetch data from an API
  async getCompletedRecords() {
    try {
      const response = await axios.get(`${this.baseUrl}/completedRecords`);
      return response.data.map(record => new Inspection(record));
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  async getScheduledTasks() {
    try {
      const response = await axios.get(`${this.baseUrl}/scheduledTasks`);
      return response.data.map(record => new Inspection(record));
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  // Post data to an API (example)
//   async createPost(postData) {
//     try {
//       const response = await axios.post(`${this.baseUrl}/posts`, postData);
//       return response.data;
//     } catch (error) {
//       console.error("Error creating post:", error);
//       throw error;
//     }
//   }
};

export default apiService;