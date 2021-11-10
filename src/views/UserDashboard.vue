<template>
  <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet 
                        rounded="lg"
                        height="70vh"
                        >
                            <!-- import user profile info -->
                            <ProfileInfo/>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                        <v-responsive max-width="400">
                            <v-text-field
                            class="ma-8"
                            dense
                            flat
                            hide-details
                            rounded
                            solo-inverted
                            label="Search Job"
                            ></v-text-field>
                        </v-responsive>
                        <v-divider></v-divider>
                        <h3>Featured Jobs</h3>
                            <JobsInfo/>
                        </v-sheet>   
                    </v-col> 
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue';
import UserTopNav from '../components/UserTopNav.vue';
import JobsInfo from '../components/JobsInfo.vue'


    export default {
        components: {
            ProfileInfo,
            UserTopNav,
            JobsInfo
        },
        data(){ 
            return {
               links: [
                    {title:'Dashboard', to: '/user-dashboard'}, 
                    {title:'Profile', to: '/user-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Borwse Jobs', to: '/jobs-board'}
                ],
            }
        },
        methods: {
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }
    }
</script>