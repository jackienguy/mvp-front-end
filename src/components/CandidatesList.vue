<template>
    <div>
        <CandidatesTable
        v-for="(applicant,i) in candidateList"
        :key="i"
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
import cookies from 'vue-cookies'

    export default {
        name: "CandidateList",
        components: {
            CandidatesTable,
        },
        data() {
            return {
                candidateList: [],
            }
        },
        mounted() {
            this.getApplicantsList()
        },
        methods: {
            getApplicantsList() {
                axios.request({
                    url: "http://youropp.ml/api/applicants",
                    methods: "GET",
                    headers: {
                        loginToken: cookies.get('loginToken')
                    },
                    params: {
                        jobId: this.$route.params.jobId
                    }
                }).then((response)=>{
                        console.log(response);
                        this.candidateList = response.data
                }).catch((err)=>{
                        console.error(err);
                        alert('No applicants')
                })
            }
        }, 
    }
</script>

<style lang="scss" scoped>

</style>