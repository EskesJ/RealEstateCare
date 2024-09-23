<template>
    <v-app class="app">
        <recHeader/>
        <v-main class="d-flex align-center flex-column justify-center">
            <recMain/>
            <CompletedRecords/>
        </v-main>
        
        <recBottomNavigation/>
    </v-app>
    
</template>

<script>
import recHeader from '@/components/header/recHeader.vue'
import recMain from '@/components/main/recMain.vue'
import recBottomNavigation from '@/components/bottom-navigation/recBottomNavigation.vue'
import CompletedRecords from '@/components/completedRecords.vue';

    export default {
        name: 'RealEstateCare',
        data() {
            return {
                message: 'Hello World',
            }
        },

        components: {
            recHeader,
            recMain,
            recBottomNavigation,
            CompletedRecords,
        }
    }
</script>

<style>

</style>