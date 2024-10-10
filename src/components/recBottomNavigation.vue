<template>
    <v-bottom-navigation class="custom-navigation">
      <v-btn v-if="isAuthenticated" @click="logout" value="logout" :active="false">
        <v-icon>mdi-logout</v-icon>
        <span>logout</span>
      </v-btn>
  
      <v-btn @click="navigateTo('information')" value="info" :active="false">
        <v-icon>mdi-information</v-icon>
        <span>information</span>
      </v-btn>
  
      <v-btn v-if="isAuthenticated" @click="navigateTo('dashboard')" value="home" :active="false">
        <v-icon>mdi-home</v-icon>
        <span>home</span>
      </v-btn>
    </v-bottom-navigation>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/mainStore';
  
  export default {
    name: 'recBottomNavigation',
    computed: {
      isAuthenticated() {
        const store = useMainStore();
        return store.authenticated && store.secondAuthenticated;
      }
    },
    methods: {
      navigateTo(routeName) {
        this.$router.push({ name: routeName }).then(() => {
          this.resetActive();
        });
      },
      logout() {
        const store = useMainStore();
        store.logout(); // This will reset the authentication states
        this.$router.push({ name: "login" });
      },
      resetActive() {
        this.$nextTick(() => {
          document.activeElement.blur();
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-navigation {
    background-color: rgb(0,170,162);
  }
  .v-icon {
    color: #1E292F;
  }
  </style>
  