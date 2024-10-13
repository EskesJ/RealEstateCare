<template>
    <v-app class="app">
        <main-header/>
        <v-main class="d-flex align-center flex-column justify-center">
            <router-view></router-view>
        </v-main>
        <bottom-navigation/>
    </v-app>
    
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'

    export default {
        name: 'RealEstateCare',
        data() {
            return {
                message: 'Hello World',
            }
        },

        components: {
            MainHeader,
            BottomNavigation,
        }
    }
</script>

<style>

</style>