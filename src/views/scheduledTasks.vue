<template>
    <v-container> 
        <h1>Scheduled Tasks</h1>
        <v-list v-if="records" lines="two">
            <v-list-item v-for="(record, index) in records"
            :key="record.id">
                <v-btn @click="showInfo(index)" block height="100%" class="bg-white px-0">
                    <v-card variant="outlined" class="py-2" :title="'Project ' + record.id + ' / ' + record.address"
                        ><v-card-text>To visit on {{ new Date(record.dateToVisit).toLocaleString() }}</v-card-text></v-card>
                </v-btn>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
    import apiService from '@/services/apiService.js';

    export default {
        name: 'scheduled',
        data() {
            return {
                records: [],
                selectedProject: null,
                selectedIndex: null
            }
        },

        methods: {
            showInfo(index) {
                this.$router.push({
                    name: 'recordAssigned',
                    params: {
                        id: this.records[index].id
                    }
                })
            }
        },

        async created() {
            try {

                const data = await apiService.getScheduledTasks();

                this.records = data.sort((a, b) => {
                    console.log(a.dateToVisit);     
                    const dateA = new Date(a.dateToVisit);
                    const dateB = new Date(b.dateToVisit);
                    
                    return dateA - dateB; 
                });

            } catch (error) {
            console.error('Failed to fetch posts:', error);
            }   
        },
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>