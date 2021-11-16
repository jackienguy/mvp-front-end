<template>
  <v-app id="inspire">
    <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="Job Requisition Data" active>
                                        <ReqCard/>
                                </b-tab>
                                <!-- <b-tab title="Job Posts" class="pa-12">
                                    <JobsInfo/>
                                </b-tab> -->
            
                                <b-tab></b-tab>
                            </b-tabs>
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import ReqCard from '../components/ReqCard.vue';
// import JobsInfo from '../components/JobsInfo.vue';

    export default {
        components: {
            RecruiterTopNav,
            ReqCard,
            // JobsInfo,
    
        },
        data(){ 
            return {
                // Top nav
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'}, 
                    {title:'Messages', to: ''}, 
                    {title:'Interviews', to: ''}
                ],
                // Profile card
                hasSaved: false,
                isEditing: null,
                model: null,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
               
            }
        }        
    }
</script>