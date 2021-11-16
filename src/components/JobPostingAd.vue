<template>
    <div>
            <v-card-text>
                <p class="text-h5 text--primary"> {{ jobTitle }}</p>
                <div class="text--primary">
                    <p> {{ orgName }} </p>
                    <p> {{ jobLocation }} </p>
                    <p> {{ ftStatus }} </p>
                    <p> {{ permStatus }} </p>
                    <p> {{ duration }} </p>
                    <p><b>Salary Range: </b> {{ salaryRange }} </p>
                    <p><b>Closing Date:</b> {{ closingDate }} </p>
                </div>
                <div class="text--primary">
                    <p class="text-h7"><b>About:</b></p>
                        <p style="white-space: pre-line;"> {{ about }} </p>
                    <p class="text-h7"><b>Responsibilities:</b></p>
                        <p style="white-space: pre-line;">{{ responsibilities }} </p>
                    <p class="text-h7"><b>Qualifications:</b></p>
                        <p style="white-space: pre-line;"> {{ qualifications }} </p>
                </div>
                <div class="text--primary">
                    <p class="text-h7"><b>Contact:</b></p>
                        <p> {{ recruiterName }} </p>
                        <p> {{ recruiterTitle }} </p>
                        <p> {{ recruiterEmail }} </p>
                        <p> {{ recruiterPhoneNumber }} </p>
                </div>
            </v-card-text> 
            <v-btn @click="overlay = !overlay" class="ma-5"> 
                Apply 
            </v-btn>  
            <v-overlay
            :z-index="zIndex"
            :value="overlay"
            >
                <JobApplicationForm
                :jobId="jobId"
                />
            <v-btn
                class="white--text"
                color="teal"
                @click="overlay = false"
            >
                Close
            </v-btn>
            </v-overlay>
    </div>
</template>

<script>
import JobApplicationForm from '../components/JobApplicationForm.vue'

    export default {
        name: "JobPostingAd",
        components: {
            JobApplicationForm,
        },  
        props: {
            jobId: Number,
            recruiterId: Number,
            jobTitle: String,
            orgName: String,
            jobLocation: String,
            ftStatus: String,
            permStatus: String,
            duration: String,
            salaryRange: String,
            closingDate: String,
            about: String,
            responsibilities: String,
            qualifications: String,
            recruiterName: String,
            recruiterTitle: String,
            recruiterEmail: String,
            recruiterPhoneNumber: String
        },
        data () {
            return {
                overlay: false,
                zIndex: 5,
                application: []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>