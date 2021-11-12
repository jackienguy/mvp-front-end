<template>
  <v-container>
        <v-row>
            <v-col
                cols="5"
            >
                <v-card 
                class="mx-auto"
                width="380"
                >
                    <v-card-text
                    >
                        <p class="text-h6 text--primary">
                            {{ jobTitle }}
                        </p>
                        <p>Job ID:{{ jobId }}</p>
                        <p>Number of Applicants:{{ numApplicants }}</p>
                        <p>Closing Date: {{ closingDate }}</p>
                    </v-card-text>
                    <v-card-actions>
                          <div>
                            <v-btn
                            class="mb-6 mr-4 pa-4"
                            outlined
                            rounded
                            small
                            color="cyan"
                            @click="overlay = !overlay"
                            >
                                View Job Post
                            </v-btn>
                            
                            <v-overlay
                            :z-index="zIndex"
                            :value="overlay"
                            >   
                             <v-card
                            class="mx-auto pa-8 mb-5 overflow-auto"
                            max-width="40vw"
                            height="60vh"
                            color="white"
                            >
                                <JobsInfo/>
                            </v-card>
                    
                                <v-btn
                                    class="white--text"
                                    color="teal"
                                    @click="overlay = false"
                                >
                                    Close
                                </v-btn>
                            </v-overlay>
                        </div>

                        <div>
                             <v-btn
                                class="mb-6 mr-4 pa-4"
                                outlined
                                rounded
                                small
                                color="cyan"
                            >
                            View Candidates
                            </v-btn>
                        </div>
                    
                      
    
                    </v-card-actions>
                </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import JobsInfo from './JobsInfo.vue';


    export default {
        name: "CandidatesTable.vue",
        components: {
            JobsInfo
        },
        props: {
            jobId: Number,
            jobTitle: String,
            closingDate: String,
            numApplicants: String
        },
        data() {
            return {
                overlay: false,
                zIndex: 5,
            }
        }
  }
</script>


<style lang="scss" scoped>

</style>




