<template>
    <h1>Knowledge Base</h1>
    <v-container>
        <v-row class="">
            <v-col v-for="(file, index) in guidelines" :key="index" cols="12">
                <v-btn class="px-0" block height="100%"  @click="downloadFile(file) " >
                    <v-card class="py-2" height="50px">
                        <span class="file-name">{{ file }}</span>
                        <v-icon>mdi-file-pdf-box</v-icon>
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
                    "Inspection_Standards_and_Guidelines.pdf",
                    "Structural_Damage_Assessment_Manual.pdf",
                    "Fire_Safety_Test_Procedures.pdf",
                    "Electrical_Installation_Standards.pdf",
                    "Plumbing_Inspection_Guidelines.pdf",
                    "Mold_Inspection_and_Remediation_Guide.pdf",
                    "Ventilation_System_Maintenance_Manual.pdf",
                    "Building_Code_Compliance_Checklist.pdf",
                    "Electrical_Safety_Compliance_Standards.pdf"
                ]
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