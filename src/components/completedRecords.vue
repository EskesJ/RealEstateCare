<template>
    <div>
        <ul v-if="records">
            <li v-for="record in records"
            :key="record.id">{{ record.id }}</li>
        </ul>
    </div>
</template>

<script>
import apiService from '@/components/services/apiService';

export default {
    name: 'completedRecords',
    data() {
        return {
            records: []
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
    }
}
</script>