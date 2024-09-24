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
import apiService from '@/components/services/apiService';
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
                const dateA = new Date(a.reportedDamage[0].date);
                const dateB = new Date(b.reportedDamage[0].date);
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