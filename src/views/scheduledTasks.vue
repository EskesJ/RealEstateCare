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
    import { useMainStore } from '@/stores/mainStore';    

    export default {
        name: 'scheduled',
        data() {
            return {
                records: [],
                selectedProject: null,
                selectedIndex: null,
                store: useMainStore()
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
      // Call the store action to fetch and populate the data in the store
            await this.store.fetchScheduledTasks();
  
      // Populate the component's records variable with the data from the store
            this.records = this.store.scheduledTasks;
  
      // Sort the records
            this.records.sort((a, b) => new Date(a.dateToVisit) - new Date(b.dateToVisit));
        },
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>