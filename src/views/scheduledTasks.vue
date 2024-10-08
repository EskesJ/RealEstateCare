<template>
    <h1>Scheduled Tasks</h1>
    <v-container> 
        <v-list v-if="records" lines="two">
            <v-list-item v-for="(record, index) in records"
            :key="record.id">
                <v-btn @click="showDetail(index)" block height="100%" class="bg-white px-0">
                    <v-card variant="outlined" class="py-2" :title="'Project ' + record.id + ' / ' + new Date(record.visitedDate).toLocaleString()"
                    >{{ record.address }}</v-card>
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
            // showDetail(index) {
            //     this.$router.push({
            //         name: 'recordDetail',
            //         params: {
            //             id: this.records[index].id
            //         }
            //     })
            // }
        },

        async created() {
            try {

                const data = await apiService.getScheduledTasks();

                this.records = data.sort((a, b) => {
                    console.log(a.visitedDate);     
                    const dateA = new Date(a.visitedDate);
                    const dateB = new Date(b.visitedDate);
                    
                    return dateB - dateA; 
                });

            } catch (error) {
            console.error('Failed to fetch posts:', error);
            }   
        },
    }
</script>