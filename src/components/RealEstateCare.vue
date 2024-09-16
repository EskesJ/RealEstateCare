<template>
    <v-app class="app">
        <recHeader/>
        <recMain/>
        <recFooter/>
    </v-app>
    
</template>

<script>
import recHeader from '@/components/header/recHeader.vue'
import recMain from '@/components/main/recMain.vue'
import recFooter from '@/components/footer/recFooter.vue'

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
            recFooter,
        }
    }
</script>

<style>


.main-content {
  flex-grow: 1; /* This makes the content area expand to fill the space */
}
</style>