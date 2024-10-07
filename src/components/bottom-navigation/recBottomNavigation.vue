<template>
    <v-bottom-navigation class="custom-navigation">
        <v-btn value="active-task">
            <v-icon>mdi-folder-open</v-icon>
            <span>active task</span>
        </v-btn>

        <v-btn value="search">
            <v-icon>mdi-file-search-outline</v-icon>
            <span>search</span>
        </v-btn>

        <v-btn value="info">
            <v-icon>mdi-information</v-icon>
            <span>information</span>
        </v-btn>
</v-bottom-navigation>
</template>

<script>
    export default {
        name: 'recBottomNavigation',

        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .custom-navigation {
        background-color: rgb(0,170,162);
    }

    .v-icon {
        color: #1E292F;
    }
</style>
