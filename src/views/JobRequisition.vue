<template>
  <v-app id="inspire">
    <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet rounded="lg">
                            <v-list color="transparent">
                                <v-list-item
                                v-for="(sideBarLink, i) in sideBarLinks"
                                :key="i"
                                :to="sideBarLink.to"
                                link
                                >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ sideBarLink.title }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                            <!-- Input job requisition board -->
                                <JobReqData/>      
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import JobReqData from '../components/JobReqData.vue';

    export default {
        components: {
            RecruiterTopNav,
            JobReqData,
        },
        data(){ 
            return {
                // Top nav
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'}, 
                    {title:'Profile', to: '/recruiter-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Interviews', to: '/interviews'}
                ],
                // Side nav
                sideBarLinks: [
                    {title:'Post Job', to: '/post-job'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                    {title:'View Candidates', to: '/view-candidates'}
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
               
                // returning requisition data
            }
        }        
    }
</script>