<template>
    <v-container> 
      <v-list v-if="records" lines="two">
        <v-list-item v-for="(record, index) in records" :key="record.id">
          <v-btn @click="showDetail(index)" block height="100%" class="bg-white px-0">
            <v-card variant="outlined" class="py-2" :title="'Project ' + record.id + ' / ' + new Date(record.visitedDate).toLocaleString()">
              {{ record.address }}
            </v-card>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/mainStore';
  
  export default {
    name: 'completedRecords',
  
    data() {
      return {
        records: [], // State to hold the local records
        selectedProject: null,
        selectedIndex: null,
        store: useMainStore() // Access the store instance
      };
    },
  
    // Lifecycle hook to fetch data when the component is created
    async created() {
      // Call the store action to fetch and populate the data in the store
      await this.store.fetchCompletedRecords();
  
      // Populate the component's records variable with the data from the store
      this.records = this.store.completedRecords;
  
      // Sort the records
      this.records.sort((a, b) => new Date(b.visitedDate) - new Date(a.visitedDate));
    },
  
    methods: {

      showDetail(index) {
        this.$router.push({
          name: 'recordDetail',
          params: { 
            id: this.records[index].id 
            }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  :deep(.v-btn__overlay) {
    background-color: transparent;
  }
  </style>
  