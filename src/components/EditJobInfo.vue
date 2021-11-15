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
                editPost: [],
            }
        },
        mounted() {
            this.getJobsInfo()
        },
        methods: {
            editPost() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    method: "PATCH",
                    params: {
                        loginToken: cookies.get("loginToken")
                    }
                }).then((response)=>{
                    console.log(response);
                    this.editPost = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>