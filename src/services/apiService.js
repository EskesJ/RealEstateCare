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
      console.error("Error fetching records:", error);
      throw error;
    }
  },

  async getScheduledTasks() {
    try {
      const response = await axios.get(`${this.baseUrl}/scheduledTasks`);
      console.log(response.data)
      return response.data.map(record => new Inspection(record));
    } catch (error) {
      console.error("Error fetching records:", error);
      throw error;
    }
  },
};

export default apiService;