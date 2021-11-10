<template>
    <div>
        <job-posting-ad
        v-for="post in postings"
        :key="post.jobId"
        :jobId="post.jobId"
        :recruiterId="post.recruiterId"
        :jobTitle="post.jobTitle"
        :orgName="post.orgName"
        :jobLocation="post.jobLocation"
        :ftStatus="post.ftStatus"
        :permStatus="post.permStatus"
        :duration="post.duration"
        :salaryRange="post.salaryRange"
        :closingDate="post.closingDate"
        :about="post.about"
        :responsibilities="post.responsibilities"
        :qualifications="post.qualifications"
        :recruiterName="post.recruiterName"
        :recruiterTitle="post.recruiterTitle"
        :recruiterEmail="post.recruiterEmail"
        :recruiterPhoneNumber="post.recruiterPhoneNumber"
        />
    </div>
</template>

<script>
import JobPostingAd from "./JobPostingAd.vue";
import axios from "axios";
import cookies from "vue-cookies";


    export default {
        name: "JobsInfo",
        components: {
            JobPostingAd,
        },
        data() {
            return {
                postings: []
            }
        },
        mounted() {
            this.getJobsInfo()
        },
        methods: {
            getJobsInfo() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    methods: "GET",
                    params: {
                        recruiterId: cookies.get("userId")
                    }
                }).then((response)=>{
                    console.log(response);
                    this.postings = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>