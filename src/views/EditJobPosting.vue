<template>
  <v-app id="inspire">
    <RecrutierTopNav/>

        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    
                    <SideNav/>

                    <v-col>
                        <v-sheet
                        height="100vh"
                        rounded="lg"
                        class="pt-10 ma-5" 
                        >
                           
                        <!-- Input job post edit form -->
                           <JobPostEditForm/>
                           
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecrutierTopNav from '../components/RecrutierTopNav.vue';
import SideNav from '../components/SideNav.vue';
import JobPostEditForm from '../components/JobPostEditForm.vue';

      export default {
        components: {
            RecrutierTopNav,
            SideNav,
           JobPostEditForm
        },
        data(){ 
            return {
                // Side nav
                sideBarLinks: [
                    {title:'Post Job', to: '/post-job'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                ],
            }
        }
      }
    
</script>