<template>

  <v-app id="inspire">
      <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                   
                    <v-layout>
                        <v-col xs="12"  md="8" class="text-center">
                            <v-sheet rounded="lg">
                                <CandidatesList/>
                            </v-sheet>
                        </v-col>
                    </v-layout>
        
                   </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import CandidatesList from '../components/CandidatesList.vue';


      export default {
        components: {
            RecruiterTopNav,
            CandidatesList,
        },

        data(){ 
            return {
                //Side nav
                sideBarLinks: [
                    {title:'Post Job', to: '/post-job'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                ],
            
            }
        }
      }
    
</script>