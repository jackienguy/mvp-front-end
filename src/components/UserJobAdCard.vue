<template>
  <v-container>
        <div id="previewAd">
            <v-col xs="12">
                  <v-hover
                    v-slot="{ hover }"
                    open-delay="200"
                    >
                <v-card d-flex align-center mb-6
                class="mx-auto pl-8"
                width="780"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                >
                    <v-card-text
                    >
                        <p class="text-h6 text--primary"> {{ jobTitle }} </p>
                        <p class="text-h8">{{ orgName }}</p>
                        <p>{{ jobLocation }}</p>
                        <p> {{ ftStatus }}, {{ permStatus }}</p>
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
                            <v-row> 
                            <v-col class="mx-auto" xs="12" lg="6">
                                <v-card 
                                class="mx-auto pa-16 overflow-auto"
                                height="60vh"
                                color="white"
                                >
                                    <JobsInfo/>
                                </v-card>
                        
                                <v-btn
                                    class="white--text mt-8"
                                    color="teal"
                                    @click="overlay = false"
                                >
                                    Close
                                </v-btn>
                            </v-col>
                            </v-row>
                            </v-overlay>
                        </div>
                    </v-card-actions>
                </v-card>
                </v-hover>
            </v-col>
        </div>
    </v-container>
</template>

<script>
import JobsInfo from './JobsInfo.vue';

    export default {
        name: "UserJobAdCard.vue",
        components: {
            JobsInfo,
        },
        props: {
            jobTitle: String,
            orgName: String,
            jobLocation: String,
            ftStatus: String,
            permStatus: String,
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




