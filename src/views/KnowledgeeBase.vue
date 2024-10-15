<template>
    <v-container>
        <h1 class="my-3">Knowledge Base</h1>
        <v-row >
            <v-col v-for="(file, index) in guidelines" :key="index" cols="12">
                <v-btn class="px-0" block height="100%"  @click="downloadFile(file) " >
                    <v-card class="d-flex flex-column align-center justify-center py-3 px-2" variant="text" >
                        <span class="file-name">{{ file }}</span>
                        <v-icon size="30px" class="my-1" :aria-label="'PDF document icon for ' + file">mdi-file-pdf-box</v-icon>
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
                alert('downloading ' + file);
            }
        }
    }
</script>

<style scoped>

.file-name {
    white-space: normal; 
    word-break: break-word; 
    max-width: 100%; 
    display: inline-block;
}


:deep(.v-btn__overlay) {
background-color: transparent;
}

h1 {
    text-align: center;
}

</style>