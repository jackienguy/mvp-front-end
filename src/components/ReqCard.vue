<template>
    <div>
        <JobReqTable 
        v-for="card in reqCards"
        :key="card.jobId"
        :jobId="card.jobId"
        :jobTitle="card.jobTitle"
        :numApplicants="card.numApplicants"
        :closingDate="card.ClosingDate"
        />
    </div>
</template>

<script>
import JobReqTable from './JobReqTable.vue';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name:"ReqCard",
        components: {
            JobReqTable,
        },
        data() {
            return {
                reqCards: []
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    methods: "GET",
                    params: {
                        recruiterId: cookies.get("userId")
                    }
                }).then((response)=>{
                    console.log(response);
                    this.reqCards = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>