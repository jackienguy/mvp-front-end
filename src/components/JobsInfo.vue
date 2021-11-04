<template>
    <div>
        <job-posting-ad
        v-for="post in postings"
        :key="post.jobId"
        :jobId="post.jobId"
        :workingTitle="post.workingTitle"
        :organizationName="post.organizationName"
        :location="post.location"
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

    export default {
        name: "JobsInfo",
        components: {
            JobPostingAd,
        },
        data() {
            return {
                postings: []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>