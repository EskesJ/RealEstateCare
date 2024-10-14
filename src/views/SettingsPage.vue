<template>
    <v-container>
      <h1>Settings</h1>
      <v-card class="pa-5 mb-5">
        <v-card-title>Account Details</v-card-title>
        <v-card-text>
          <v-text-field label="Username" aria-label="Username" :value="username" v-model="username" disabled class="high-contrast-label"></v-text-field>
          <v-text-field label="Email" aria-label="Email" value="inspector@example.com" v-model="email" disabled class="high-contrast-label"></v-text-field>
          <v-file-input label="Avatar" aria-label="Avatar" prepend-icon="mdi-account-circle" accept="image/*" :alt="username + ' avatar'" class="high-contrast-label"></v-file-input>
          <v-text-field v-model="oldPassword" label="Old password" aria-label="Old password" type="password" class="high-contrast-label" ></v-text-field>
          <v-text-field v-model="newPassword" label="New Password" aria-label="New Password" type="password" class="high-contrast-label"></v-text-field>
          <v-text-field v-model="repeatNewPassword" label="Repeat New Password" aria-label="Repeat New Password" type="password" class="high-contrast-label"></v-text-field>
          <v-btn @click="changePassword()" color="#1E292F">Change password</v-btn>
        </v-card-text>
      </v-card>
  
      <v-card class="pa-5 mb-5">
        <v-card-title>Interface Preferences</v-card-title>
        <v-card-text>
          <v-switch label="Dark Mode" class="high-contrast-label"></v-switch>
          <v-select
            class="high-contrast-label"
            aria-label="Theme Color"
            :items="['Blue', 'Green', 'Red', 'Purple']"
            v-model="selectedThemeColor"
          ></v-select>
        </v-card-text>
      </v-card>
  
      <v-card class="pa-5 mb-5">
        <v-card-title>Notifications</v-card-title>
        <v-card-text>
          <v-switch label="Show Notifications" aria-label="Show Notifications" v-model="showNotifications" class="high-contrast-label"></v-switch>
          <v-switch label="Enable Sounds" aria-label="Enable Sounds" v-model="enableSounds" class="high-contrast-label"></v-switch>
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
        repeatNewPassword: "",
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
          if (this.oldPassword === this.password && this.newPassword === this.repeatNewPassword) {
            this.store.setPassword(this.newPassword);
            localStorage.setItem("password", this.newPassword);
            alert("Wachtwoord is gewijzigd");
          } else {
            alert("Old password does not match or new passwords do not match");
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

  h1 {
    text-align: center;
  }

  .high-contrast-label :deep(.v-label){
      color: black; 
    }

  .v-select{
      color: black;
    }

  </style>
  