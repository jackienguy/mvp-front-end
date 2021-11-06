<template>
    <div>
        <v-card
        class="mx-auto"
        max-width="50vw"
        height="70vh"
        >
            <v-card-text>
                <p class="text-h5 text--primary"> {{ workingTitle }}</p>
                <div class="text--primary">
                    <p> {{ organizationName }} </p>
                    <p> {{ location }} </p>
                    <p> {{ ftStatus }} </p>
                    <p> {{ permStatus }} </p>
                    <p> {{ duration }} </p>
                    <p><b>Salary Range: </b> {{ salaryRange }} </p>
                    <p><b>Closing Date:</b> {{ closingDate }} </p>
                </div>
                <div class="text--primary">
                    <p class="text-h7"><b>About:</b></p>
                        <p> {{ about }} </p>
                    <p class="text-h7"><b>Responsibilities:</b></p>
                        <p>{{ responsibilities }} </p>
                    <p class="text-h7"><b>Qualifications:</b></p>
                        <p> {{ qualifications }} </p>
                </div>
                <div class="text--primary">
                    <p class="text-h7"><b>Contact:</b></p>
                        <p> {{ recruiterName }} </p>
                        <p> {{ recruiterTitle }} </p>
                        <p> {{ recruiterEmail }} </p>
                        <p> {{ recruiterPhoneNumber }} </p>
                </div>
            </v-card-text> 
            <v-btn @click="apply" class="ma-5"> Apply </v-btn>  
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "JobPostingAd",
        props: {
            jobId: Number,
            workingTitle: String,
            organizationName: String,
            location: String,
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
        methods: {
            apply() {
                this.$router.push('/application')
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>