b<template>
    <div>
        <v-row>
            <v-col class="mx-auto" xs="12" lg="10"> 
                <v-card 
                class="pt-5 pb-5"
                >
                  <v-list-content>
                      <v-list-item-title id="name" class="pa-6"><b>{{firstName}} {{lastName}} </b> </v-list-item-title>   
                   
                          <v-btn
                          outlined
                          rounded
                          small
                          color="cyan"
                          @click="isExpanded = true"
                          >
                          Resume
                          </v-btn>

                      <!-- Interested btn -->
                           <v-btn
                            icon
                            color="green"
                            disabled
                            class="ml-3"
                          >
                            <v-icon>mdi-thumb-up</v-icon>
                          </v-btn>

                        <!-- Not interested btn -->
                          <v-btn
                            icon
                            color="deep-orange"
                            disabled
                            class="ml-3"
                          >
                            <v-icon>mdi-thumb-down</v-icon>
                          </v-btn>
                    
                    
                        <!-- Invite to interview -->
                          <v-btn
                          class="ml-3"
                          outlined
                          rounded
                          small
                          color="cyan"
                          @click="isExpanded = true"
                          >
                          Invite to Interview
                          </v-btn>
                 
                  </v-list-content>
                </v-card>

                <v-divider></v-divider>

            <div v-if="isExpanded">
              <ResumeInfo/>
            </div>
      
            </v-col>
        </v-row>
  </div>
           
</template>

<script>
import ResumeInfo from './ResumeInfo.vue'
  export default {
    name: "CandidatesTable",
    components: {
      ResumeInfo,
    },
    props: {
        jobId: Number,
        firstName: String,
        lastName: String,
        jobTitle: String
    },
    data(){
      return {
        isExpanded: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>


