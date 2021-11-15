<template>
  <v-app id="inspire">
      <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    
                     <!-- input sideNav -->
                    <SideNav/>

                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                        <!-- Job post input form -->
                            <JobPostForm/>
                           
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import JobPostForm from '../components/JobPostForm.vue';
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import SideNav from '../components/SideNav.vue';

      export default {
        components: {
            JobPostForm,
            RecruiterTopNav,
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