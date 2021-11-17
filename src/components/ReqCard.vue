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
                    url: "http://youropp.ml/api/jobs",
                    methods: "GET",
                    params: {
                        userId: cookies.get("userId")
                    }
                }).then((response)=>{
                    console.log(response);
                    this.reqCards = response.data
                    cookies.set('jobId', response.data.jobId) 
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>