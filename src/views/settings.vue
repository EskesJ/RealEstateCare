<template>
    <v-container>
      <v-card class="pa-5 mb-5">
        <v-card-title>Account Details</v-card-title>
        <v-card-text>
          <v-text-field label="Username" :value="username" ></v-text-field>
          <v-text-field label="Email" value="inspector@example.com" ></v-text-field>
          <v-file-input label="Avatar" prepend-icon="mdi-account-circle" accept="image/*"></v-file-input>
          <v-text-field label="Change Password" type="password"></v-text-field>
          <v-text-field label="Confirm Password" type="password"></v-text-field>
        </v-card-text>
      </v-card>
  
      <v-card class="pa-5 mb-5">
        <v-card-title>Interface Preferences</v-card-title>
        <v-card-text>
          <v-switch label="Dark Mode"></v-switch>
          <v-select
            label="Theme Color"
            :items="['Blue', 'Green', 'Red', 'Purple']"
            v-model="selectedThemeColor"
          ></v-select>
        </v-card-text>
      </v-card>
  
      <v-card class="pa-5 mb-5">
        <v-card-title>Notifications</v-card-title>
        <v-card-text>
          <v-switch label="Show Notifications" v-model="showNotifications"></v-switch>
          <v-switch label="Enable Sounds" v-model="enableSounds"></v-switch>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/mainStore';
  
  export default {
    name: "settings",
    data() {
      return {
        selectedThemeColor: 'Blue',
        showNotifications: true,
        enableSounds: false,
        store: useMainStore()
      };
    },
    computed: {
      username() {
        return this.store.username; // Retrieve the username from the store
      }
    },

  };
  </script>
  
  <style scoped>
  .pa-5 {
    padding: 20px !important;
  }
  .mb-5 {
    margin-bottom: 20px !important;
  }
  </style>
  