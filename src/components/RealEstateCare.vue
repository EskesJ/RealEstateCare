<template>
    <v-app class="app">
        <recHeader/>
        <recMain/>
        <recBottomNavigation/>
    </v-app>
    
</template>

<script>
import recHeader from '@/components/header/recHeader.vue'
import recMain from '@/components/main/recMain.vue'
import recBottomNavigation from '@/components/bottom-navigation/recBottomNavigation.vue'

    export default {
        name: 'RealEstateCare',
        data() {
            return {
                message: 'Hello World'
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