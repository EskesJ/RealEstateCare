<template>
        <v-app-bar class="toolbar">
            <router-link to="/dashboard"><img class="ml-2 mr-n4" :src="getImgUrl()"></router-link>
            <v-app-bar-title class="custom-text-color">
                <h1 class="text-h5">Real Estate Care</h1>
                <p class="text-subtitle-2 font-weight-light mt-n1">Caring is in our nature</p>
            </v-app-bar-title>
            <router-link to="/settings">
                <v-btn v-if="isAuthenticated" icon class="mr-2">
                  <v-icon class="custom-text-color">mdi-cog</v-icon>
                </v-btn>
            </router-link>
        </v-app-bar>
</template>

<script>
    import { useMainStore } from '@/stores/mainStore';
    
    export default {
        name: 'recHeader',
        computed: {
            isAuthenticated() {
                const store = useMainStore();
                return store.authenticated && store.secondAuthenticated;
            }
        },

        methods: {
            getImgUrl() {
                return new URL('icons/logo-1.svg', import.meta.url).href;
            }
        }
    }
</script>

<style scoped>
    .toolbar {
        background-color: #1E292F !important;
    }
    .custom-text-color {
        color: #C5C8C9;
    }

    img {
        width: 65px;
    }
</style>