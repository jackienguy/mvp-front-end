<template>
    <v-app id="inspire">
       <RecruiterTopNav/>
        <v-main class="teal lighten-3">
            <v-container class="mt-">
                <v-row>
                     <ProfileInfo/>
                </v-row>
                <v-row>
                    <v-col class="mx-auto" xs="12" lg="10">
                        <v-sheet
                        min-height="80vh"
                        rounded="lg"
                        >
                        <v-container class="grey lighten-5">
                            <v-row no-gutters>
                                <v-col>
                                   
                                    <Calender/>
                                </v-col>
                            </v-row>
                        </v-container>

                    </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Calender from '../components/Calender.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import RecruiterTopNav from '../components/RecrutierTopNav.vue'

    export default {
        components: {
            ProfileInfo,
            RecruiterTopNav,
            Calender
        },
        methods: {
            goToPostJob(){
                this.$router.push("/post-job");
            },
            goToJobRequisitionPage(){
                this.$router.push("/job-requisition");
            },
        }
    }
</script>