<template>
        <v-app-bar class="toolbar">
            <img class="ml-2 mr-n4" :src="getImgUrl()">
            <v-app-bar-title class="custom-text-color">
                <h1 class="text-h5">Real Estate Care</h1>
                <p class="text-subtitle-2 font-weight-light mt-n1">Caring is in our nature</p>
            </v-app-bar-title>
            <v-icon icon="mdi-bell" class="mr-2 custom-text-color" ></v-icon>
            <v-icon icon="mdi-cog" class="mr-2 custom-text-color"></v-icon>
        </v-app-bar>
</template>

<script>
    export default {
        name: 'recHeader',
        data() {
            
            },
        methods: {
            getImgUrl() {
                return new URL('../icons/logo-1.svg', import.meta.url).href;
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