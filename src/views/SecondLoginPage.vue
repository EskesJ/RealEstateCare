<template>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card class="px-5 py-5" max-width="400">
        <v-card-title class="text-h6">Enter Authentication Code</v-card-title>
        <v-card-text>
          <v-form ref="codeForm" @submit.prevent="verifyCode">
            <v-text-field
              class="high-contrast-label"
              aria-label="Authentication Code"
              label="Authentication Code"
              v-model="authCode"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit" color="#1E292F" class="mt-4" block>Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/mainStore';
  
  export default {
    name: "secondLogin",
    data() {
      return {
        authCode: ""
      };
    },
    methods: {
      verifyCode() {
        
        const store = useMainStore();
        const correctCode = "12345"; 
  
        if (this.authCode === correctCode) {
          store.setSecondAuthenticated(true);
          store.setUsername(localStorage.getItem('username'));
          store.setPassword(localStorage.getItem('password'));
          this.$router.push({ name: "Dashboard" });
        } else {
          alert("Invalid authentication code");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }

  .high-contrast-label :deep(.v-label){
      color: black; 
    }
  </style>
  