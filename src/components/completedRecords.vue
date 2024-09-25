<template>
    <div>
        <v-list v-if="records" lines="two">
            <v-list-item v-for="(record, index) in records"
            :key="record.id">
                <v-btn @click="selectedIndex = index" block height="100%" class="bg-white px-0" variant="outlined">
                    <v-card class="py-2" :title="'Project ' + record.id + ' / ' + record.reportedDamage[0].date"
                    >{{ record.address }}</v-card>
                </v-btn>
            </v-list-item>
        </v-list>
    </div>
    <div>
        <recordDetail v-if="selectedIndex != null" :selectedProject="records[selectedIndex]"/>
    </div>
</template>

<script>
import apiService from '@/services/apiService.js';
import recordDetail from '@/components/recordDetail.vue';


export default {
    name: 'completedRecords',
    data() {
        return {
            records: [],
            selectedProject: null,
            selectedIndex: null
        }
    },
    async created() {
        try {

            const data = await apiService.getPosts();

            this.records = data.sort((a, b) => {
                const dateA = new Date(a.visitedDate);
                const dateB = new Date(b.visitedDate);
                return dateB - dateA; 
            });

            console.log(this.records);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    },

    components: {
        recordDetail
    }
}
</script>