<template>
    <div>
        <CandidatesTable
        v-for="applicant in candidateList"
        :key="applicant.jobId"
        :firstName="applicant.firstName"
        :lastName="applicant.lastName"
        :jobId="applicant.jobId"
        :jobTitle="applicant.jobTitle"
        />
    </div>
</template>

<script>
import CandidatesTable from './CandidatesTable.vue';
import axios from 'axios'

    export default {
        name: "CandidateList",
        components: {
            CandidatesTable,
        },
        data() {
            return {
                candidateList: []
            }
        },
        mounted() {
            this.getApplicantsList()
        },
        methods: {
            getApplicantsList() {
                axios.request({
                    url: "http://127.0.0.1:5000/api/applicants",
                    methods: "GET",
                    params: {
                        jobId: 1
                    }
                }).then((response)=>{
                        console.log(response);
                        this.candidateList = response.data
                }).catch((err)=>{
                        console.error(err);
                })
            }
        }, 
    }
</script>

<style lang="scss" scoped>

</style>