<template>
    <div>
         <v-container fluid id="jobDisplay">
            <v-row justify="space-around">
                <v-col cols="12">
                    <UserJobAdCard 
                    v-for="ad in jobAds"
                    :key="ad.jobId"
                    :jobTitle="ad.jobTitle"
                    :orgName="ad.orgName"
                    :jobLocation="ad.jobLocation"
                    :ftStatus="ad.ftStatus"
                    :permStatus="ad.permStatus"
                    />
                </v-col>
            </v-row>
         </v-container>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import UserJobAdCard from "./UserJobAdCard.vue";

    export default {
        name: "UserJobInfoView",
        components: {
            UserJobAdCard
        },
        data(){
            return {
                jobAds: []
            }
        },
        mounted() {
            this.getJobAdData()
        },
        methods: {
            getJobAdData() {
                axios.request ({
                    url: "http://youropp.ml/api/jobs",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.jobAds = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
        }  
    }
</script>

<style lang="scss" scoped>
  
</style>