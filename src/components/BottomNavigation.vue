<template>
    <v-bottom-navigation class="custom-navigation">
      <v-btn v-if="isAuthenticated" @click="logout" value="logout" :active="false" aria-label="log out">
        <v-icon>mdi-logout</v-icon>
        <span>logout</span>
      </v-btn>
  
      <v-btn @click="navigateTo('Information')" value="info" :active="false">
        <v-icon>mdi-information</v-icon>
        <span>information</span>
      </v-btn>
  
      <v-btn v-if="isAuthenticated" @click="navigateTo('Dashboard')" value="home" :active="false">
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
      //this functions checks if the user is logged in, if false then some buttons will not appear.
      isAuthenticated() {
        const store = useMainStore();
        return store.authenticated && store.secondAuthenticated;
      }
    },
    methods: {
      //this functions makes it so that when a navigation button is pressed, it doesn't appear pressed on the next page
      navigateTo(routeName) {
        this.$router.push({ name: routeName }).then(() => {
          this.resetActive();
        });
      },
      logout() {
        const store = useMainStore();
        store.logout(); 
        this.$router.push({ name: "Login" });
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
  