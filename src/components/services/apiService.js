// Import Axios
import axios from 'axios';

const apiService = {
  baseUrl: 'https://my-json-server.typicode.com/typicode/demo',

  // Fetch data from an API
  async getPosts() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts`);
      return response.data;
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