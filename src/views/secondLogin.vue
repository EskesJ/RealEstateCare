<template>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card class="px-5 py-5" max-width="400">
        <v-card-title class="text-h6">Enter Authentication Code</v-card-title>
        <v-card-text>
          <v-form ref="authForm" @submit.prevent="verifyCode">
            <v-text-field
              label="Authentication Code"
              type="password"
              v-model="authCode"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary" class="mt-4" block>Verify</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "secondLogin",
    data() {
      return {
        authCode: ""
      };
    },
    methods: {
      verifyCode() {
        const expectedCode = localStorage.getItem("authCode");
        if (this.authCode === expectedCode) {
          localStorage.setItem('secondAuthenticated', true);
          this.$router.push({ name: "dashboard" });
        } else {
          alert("Invalid authentication code");
        }
      }
    },
    mounted() {
      localStorage.setItem("authCode", "123456");
    }
  };
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }
  </style>
  