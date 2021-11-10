<template>
    <div>
        <JobReqTable
        v-for="job in jobReqs"
        :key="job.recruiterId"
        :jobTitle="job.jobTitle"
        :jobId="job.jobId"
        :numApplicants="job.numApplicants"
        :closingDate="job.closingDate"
        :status="job.status"
        />
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';


    export default {
        name: "JobReqData",
        components: {
           
        },
        data(){
            return {
                jobReqs: []
            }
        },
        mounted() {
            this.getJobReqData()
        },
        methods: {
            getJobReqData() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    methods: "GET",
                    params: {
                        recruiterId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.jobReqs = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }  
    }
</script>

<style lang="scss" scoped>

</style>