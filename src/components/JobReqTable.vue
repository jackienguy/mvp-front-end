<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="jobReqs"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "JobReqTable",
        data() {
            return {
                search: '',
                headers: [
                {
                    text: 'Job Title',
                    align: 'start',
                    filterable: false,
                    value: 'jobTitle',
                },
                { text: 'Job ID', value: 'jobId' },
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
                   { status: ''} 
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