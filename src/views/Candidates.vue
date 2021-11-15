<template>

  <v-app id="inspire">
      <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                   
                    <!-- input sideNav -->
                    <SideNav/>
                
                    <v-layout id="sideNav">
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
import SideNav from '../components/SideNav.vue';

      export default {
        components: {
            RecruiterTopNav,
            CandidatesList,
            SideNav
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