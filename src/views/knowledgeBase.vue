<template>
    <v-container>
        <h1>Knowledge Base</h1>
        <v-row >
            <v-col v-for="(file, index) in guidelines" :key="index" cols="12">
                <v-btn class="px-0" block height="100%"  @click="downloadFile(file) " >
                    <v-card class="d-flex flex-column align-center justify-center py-3 px-2" variant="text" >
                        <span class="file-name">{{ file }}</span>
                        <v-icon size="30px" class="my-1">mdi-file-pdf-box</v-icon>
                    </v-card>
                    
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: 'knowledge',
        data() {
            return {
                guidelines: [
                    "Inspection Standards and Guidelines",
                    "Structural Damage Assessment Manual",
                    "Fire Safety Test Procedures",
                    "Electrical Installation Standards",
                    "Plumbing Inspection Guidelines",
                    "Mold Inspection and Remediation Guide",
                    "Ventilation System Maintenance Manual",
                    "Building Code Compliance Checklist",
                    "Electrical Safety Compliance Standards"
                ]
            }
        },
        methods: {
            downloadFile(file) {
                //for future expansion outside the scope of this assignment
                console.log('downloading ' + file);
            }
        }
    }
</script>

<style scoped>

.file-name {
    white-space: normal; /* Allow text wrapping */
    word-break: break-word; /* Break words if necessary */
    max-width: 100%; /* Ensures the text wraps within the card width */
    display: inline-block;
}


:deep(.v-btn__overlay) {
background-color: transparent;
}

</style>