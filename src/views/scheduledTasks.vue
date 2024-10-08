<template>
    <h1>Scheduled Tasks</h1>
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

                const data = await apiService.getCompletedRecords();

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