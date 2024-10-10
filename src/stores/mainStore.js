
import { defineStore } from 'pinia';
import apiService from '@/services/apiService';

export const useMainStore = defineStore('main', {

  state: () => ({
    completedRecords: [],
    scheduledTasks: [],
    username: "",
    authenticated: !!localStorage.getItem("authenticated"),
    secondAuthenticated: !!localStorage.getItem("secondAuthenticated"),
    
  }),

  // Actions: Functions to fetch and update the state
  actions: {
    setUsername(newUsername) {
        this.username = newUsername;
      },

    setAuthenticated(value) {
      this.authenticated = value;
      localStorage.setItem("authenticated", value ? "true" : "");
    },

    setSecondAuthenticated(value) {
      this.secondAuthenticated = value;
      localStorage.setItem("secondAuthenticated", value ? "true" : "");
    },

    logout() {
      this.authenticated = false;
      this.secondAuthenticated = false;
      localStorage.removeItem("authenticated");
      localStorage.removeItem("secondAuthenticated");
    },

    async fetchCompletedRecords() {
      try {
        const data = await apiService.getCompletedRecords();
        this.completedRecords = data;
      } catch (error) {
        console.error('Error fetching completed records:', error);
      }
    },

    async fetchScheduledTasks() {
      try {
        const data = await apiService.getScheduledTasks();
        this.scheduledTasks = data;
      } catch (error) {
        console.error('Error fetching scheduled tasks:', error);
      }
    },
  },
});
