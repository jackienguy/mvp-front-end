<template>
  <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <v-col xs="12">
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
                        class="pa-12"
                        rounded="lg"
                        width="60vw"
                        height="100vh"
                        >
                            <!-- import application form  -->
                            <JobApplicationForm/>
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
import JobApplicationForm from '../components/JobApplicationForm.vue'

    export default {
        components: {
            ProfileInfo,
            UserTopNav,
            JobApplicationForm
        },
        data(){ 
            return {
               links: [
                    {title:'Dashboard', to: '/user-dashboard'}, 
                    {title:'Profile', to: '/user-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Borwse Jobs', to: '/jobs-board'}
                ],
                featureJobs: [
                  ['Web Developer', 'Edmonton', 'Awesome Company'],
                  ['Web Designer', 'Edmonton', 'ABC'],
                  ['Security Analyst', 'Calgary', 'Security World'],
                ],
                reveal: false,
            }
        },
        methods: {
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }
    }
</script>