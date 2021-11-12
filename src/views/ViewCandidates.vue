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
                    
                            <CandidatesTable/>
                           
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import CandidatesTable from '../components/CandidatesTable.vue';

      export default {
        components: {
            RecruiterTopNav,
            CandidatesTable
        },
        data(){ 
            return {
                //Side nav
                sideBarLinks: [
                    {title:'Post Job', to: '/post-job'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                    {title:'View Candidates', to: '/view-candidates'}
                ],
            }
        }
      }
    
</script>