<template>
    <v-container>
      <v-card class="pa-5 mb-5">
        <v-card-title>Account Details</v-card-title>
        <v-card-text>
          <v-text-field label="Username" :value="username" v-model="username" disabled></v-text-field>
          <v-text-field label="Email" value="inspector@example.com" v-model="email" disabled></v-text-field>
          <v-file-input label="Avatar" prepend-icon="mdi-account-circle" accept="image/*"></v-file-input>
          <v-text-field v-model="oldPassword" label="Old password" type="password"></v-text-field>
          <v-text-field v-model="newPassword" label="New Password" type="password"></v-text-field>
          <v-btn @click="changePassword()" color="#1E292F">Change password</v-btn>
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
        username: "",
        email: 'inspector@example.com',
        oldPassword: "",
        newPassword: "",
        selectedThemeColor: 'Blue',
        showNotifications: true,
        enableSounds: false,

      };
    },

    created() {
      const store = useMainStore();
      this.username = store.username;
    },

    computed: {
      store() {
        return useMainStore();
      },
      password() {
        return this.store.password;
      }
    },
    
    methods: {
      changePassword() {
        console.log(this.password); 
        if (this.oldPassword.length && this.newPassword.length) {
          if (this.oldPassword === this.password) {
            this.store.setPassword(this.newPassword);
            localStorage.setItem("password", this.newPassword);
          } else {
            console.log("Old password does not match");
          }
        }
      }
    } 

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
  