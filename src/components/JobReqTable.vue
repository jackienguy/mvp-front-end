<template>
  <v-container grid-list-sm>
        <v-row>
            
                    <v-card 
                    class="jobReqCard mx-auto"
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
                                    Preview Job Post
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
                                <div>
                                 <!--To edit job post  -->
                                    <v-btn
                                    class="ml-4"
                                    fab
                                    outlined
                                    small
                                    color="teal lighten-3"
                                    @click="ToEditJobAdBtn()"
                                    >
                                        <v-icon>
                                        mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                </div>
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
                                    @click="goToApplicants()"
                                >
                                View Candidates
                                </v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
             
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
        },
        methods: {
            goToApplicants() {
                this.$router.push('/candidates/'+this.jobId)
            },
             ToEditJobAdBtn() {
                 this.$router.push('/edit-job-posting')
             }
        }
  }
</script>


<style lang="scss">
    .jobReqCard {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        margin: 30px 0;
    }
</style>




