<template>
    <v-sheet
    min-height="70vh"
    rounded="lg"
    >
        <v-data-table
            class="mt-12"
            :headers="headers"
            :items="jobReqs"
        >
        </v-data-table>
    </v-sheet>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "CandidatesTable",
        data() {
            return {
                headers: [
                {
                    text: 'Job ID',
                    align: 'start',
                    sortable: false,
                    value: 'jobId',
                },
                { text: 'Job Title', value: 'jobTitle' },
                { text: 'Number of Applicants', value: 'numApplicants' },
                { text: 'Closing Date', value: 'closingDate' },
                { text: 'Status', value: 'status' },
                ],
                jobReqs: [
                    {jobTitle: ''},
                    {recruiterId: ''},
                    {jobId: ''},
                    {numApplicants: ''},
                    {closingDate: ''},
                    {status: ''} 
                ]
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