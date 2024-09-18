<template>
    <v-app class="app">
        <recHeader/>
        <v-main>
            <recMain/>
        <div>
            <h1>Posts</h1>
            <ul v-if="posts">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
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
                posts: [],
            }
        },

        async created() {
            try {
                this.posts = await apiService.getPosts();
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