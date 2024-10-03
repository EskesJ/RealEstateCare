<template>
    <v-app class="app">
        <recHeader/>
        <v-main class="d-flex align-center flex-column justify-center">
            <router-view></router-view>
        </v-main>
        <recBottomNavigation/>
    </v-app>
    
</template>

<script>
import recHeader from '@/components/recHeader.vue'
import recBottomNavigation from '@/components/recBottomNavigation.vue'

    export default {
        name: 'RealEstateCare',
        data() {
            return {
                message: 'Hello World',
            }
        },

        components: {
            recHeader,
            recBottomNavigation,
        }
    }
</script>

<style>

</style>