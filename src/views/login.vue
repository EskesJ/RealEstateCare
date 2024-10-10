<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="px-5 py-5" width="100%">
      <v-card-title class="text-h5">Login</v-card-title>
      <v-card-text>
        <v-form ref="loginForm" @submit.prevent="handleLogin()">

          <v-text-field
            label="Username"
            v-model="username"
            required
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" class="mt-4" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  mounted() {
    localStorage.setItem("username", "Jeffrey");
    localStorage.setItem("password", "pass123");
  },

  methods: {
    navigateTo(routeName) {
            this.$router.push({ name: routeName }).then(() => {
                this.$nextTick(() => {
                    document.activeElement.blur();
                });
            });
        },
        
    handleLogin() {
        const store = useMainStore();
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

      if (this.username === storedUsername && this.password === storedPassword) {
        store.setAuthenticated(true);
        this.$router.push({ 
            name: "secondLogin" 
        });
      } else {
        alert("Invalid credentials");
      }
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
