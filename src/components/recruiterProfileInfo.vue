<template>
    <div>
        <recruiterProfileBody 
        v-for="recruiter in users"
        :key="recruiter.userId"
        :userId="recruiter.userId"
        :email="recruiter.email"
        :firstName="recruiter.firstName"
        :lastName="recruiter.lastName"
        :phoneNumber="recruiter.phoneNumber"
        :organizationName="recruiter.organizationName"
        :location="recruiter.location"
        :workingTitle="recruiter.workingTitle"
        :companyWebsite="recruiter.companyWebsite"
        />
    </div>
</template>

<script>
import recruiterProfileBody from './recruiterProfileBody.vue';
import axios from 'axios'

    export default {
        name: "recruiterProfileInfo",
        components: { 
            recruiterProfileBody 
        },
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getRecruiterData()
        },
        methods: {
            getRecruiterData() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user",
                    methods: "GET",
                    params: {
                        userId: 9
                    },
                }).then((response)=>{
                    console.log(response);
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>