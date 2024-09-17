<template>
    <v-main class="d-flex align-center">
        <v-container>
            <v-row>
                <v-col cols="6" class="text-center">
                    <v-btn width="100%" height="100%" class="bg-white px-0 no-bg-change">
                        <v-card class="d-flex flex-column justify-center align-center" elevation="0">
                            <v-icon
                            icon="mdi-invoice-text-clock"
                            size="150px"></v-icon>
                            <v-card-text class="text-h5 mt-n2">
                                Scheduled
                            </v-card-text>
                        </v-card>
                    </v-btn>
                </v-col>
                <v-col cols="6" class="text-center">
                    <v-btn block height="100%" class="bg-white px-0">
                        <v-card  class="d-flex flex-column justify-center align-center" elevation="0">
                            <v-icon
                            icon="mdi-clipboard-check"
                            size="150px"></v-icon>
                            <v-card-text  class="text-h5 mt-n2">
                                Completed
                            </v-card-text>
                        </v-card>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" class="text-center">
                    <v-btn block height="100%" class="bg-white px-0">
                        <v-card  class="d-flex flex-column justify-center align-center" elevation="0">
                            <v-icon
                            icon="mdi-database"
                            size="150px"></v-icon>
                            <v-card-text  class="text-h5 mt-n2 text-wrap">
                                Knowledge base
                            </v-card-text>
                        </v-card>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn block height="100%" class="bg-white px-0">
                        <v-card cols="6"  class="d-flex flex-column justify-center align-center" elevation="0">
                            <v-icon
                            icon="mdi-cogs"
                            size="150px"></v-icon>
                            <v-card-text class="text-h5 mt-n2">
                                Settings
                            </v-card-text>
                        </v-card>
                    </v-btn>
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
        background-color: transparent;
    }

    .v-card {
        height: 240px;

    }   

    /deep/ .v-btn__overlay {
    background-color: transparent;
}
</style>