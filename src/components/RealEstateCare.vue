<template>
    <v-app class="app">
        <recHeader/>
        <v-main>
            <recMain/>
        <div>
            <h1>Posts</h1>
            <ul v-if="records">
            <li v-for="record in records" :key="record.id">{{ record.id }}</li>
            </ul>
        </div>
        </v-main>
        
        <recBottomNavigation/>
    </v-app>
    
</template>

<script>
import apiService from '@/components/services/apiService';
import recHeader from '@/components/header/recHeader.vue'
import recMain from '@/components/main/recMain.vue'
import recBottomNavigation from '@/components/bottom-navigation/recBottomNavigation.vue'

    export default {
        name: 'RealEstateCare',
        data() {
            return {
                message: 'Hello World',
                records: [],
            }
        },

        async created() {
            try {
                this.records = await apiService.getPosts()
                console.log(this.records[1].id);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }   
        
        },
        components: {
            recHeader,
            recMain,
            recBottomNavigation,
        }
    }
</script>

<style>

</style>