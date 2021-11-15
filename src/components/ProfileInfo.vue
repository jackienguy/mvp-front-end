<template>
    <div>
        <ProfileCard 
        :userId="user.userId"
        :email="user.email"
        :firstName="user.firstName"
        :lastName="user.lastName"
        :organizationName="user.organizationName"
        :location="user.location"
        :workingTitle="user.workingTitle"
        :phoneNumber="user.phoneNumber"
        :role="user.role"

        />
    </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue';
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "ProfileInfo",
        components: { 
            ProfileCard
        },
        data() {
            return {
                user: [] 
            }
        },
        mounted() {
            this.getProfileData()
        },
        methods: {
            getProfileData() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.user = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>