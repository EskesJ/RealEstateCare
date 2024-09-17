<template>
    <v-main class="d-flex align-center">
        <v-container>
            <v-row>
                <v-col cols="6" class="text-center">
                    <v-card class="d-flex flex-column justify-center align-center">
                        <v-icon
                        icon="mdi-invoice-text-clock"
                        size="150px"></v-icon>
                        <v-card-text class="text-h5 mt-n2">
                            Scheduled
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" class="text-center">
                    <v-card class="d-flex flex-column justify-center align-center">
                        <v-icon
                        icon="mdi-clipboard-check"
                        size="150px"></v-icon>
                        <v-card-text class="text-h5 mt-n2">
                            Completed
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" class="text-center">
                    <v-card class="d-flex flex-column justify-center align-center">
                        <v-icon
                        icon="mdi-database"
                        size="150px"></v-icon>
                        <v-card-text class="text-h5 mt-n2">
                            Knowledge base
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card cols="6" class="d-flex flex-column justify-center align-center">
                        <v-icon
                        icon="mdi-cogs"
                        size="150px"></v-icon>
                        <v-card-text class="text-h5 mt-n2">
                            Settings
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'recMain',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .v-icon {
        color: #1E292F;
    }

    .v-card {
        height: 240px;
    }
</style>