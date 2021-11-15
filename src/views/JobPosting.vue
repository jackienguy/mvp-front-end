<template>
  <v-app id="inspire">
    <RecrutierTopNav/>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    
                    <SideNav/>

                    <v-col>
                        <v-sheet
                        height="100vh"
                        rounded="lg"
                        class="pt-10"
                        >
                           
                        <!-- Job post input form -->
                            <JobsInfo/>
                           
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import JobsInfo from '../components/JobsInfo.vue';
import RecrutierTopNav from '../components/RecrutierTopNav.vue';
import SideNav from '../components/SideNav.vue';


      export default {
        components: {
            JobsInfo,
            RecrutierTopNav
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