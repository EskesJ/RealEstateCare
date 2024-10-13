<template>
    <v-container>
      <v-card class="my-4">
        <v-card-title>Application Information</v-card-title>
        <v-card-text>
          <p><strong>App Version:</strong> 0.1.7</p>
          <p>This is the latest version of Real Estate Care. Please ensure your app is up to date to access the latest features and improvements.</p>
        </v-card-text>
      </v-card>
  
      <v-card class="my-4">
        <v-card-title>Support</v-card-title>
        <v-card-text>
          <p>If you encounter any issues logging in or using the application, please do not hesitate to reach out to our support team.</p>
          <p>For assistance, contact us at:</p><br>
          <p><strong>Email:</strong> support@realestatecare.com</p>
          <p><strong>Phone:</strong> +31 123456789</p><br>
          <p>Our support team is available Monday to Friday from 9:00 AM to 6:00 PM.</p>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'information'
  }
  </script>
  
  <style scoped>
  .v-card-title {
    font-weight: bold;
    font-size: 18px;
  }
  .v-card-text {
    font-size: 16px;
  }
  
  </style>
  