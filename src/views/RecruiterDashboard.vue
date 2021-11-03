<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
        >
        <v-avatar
            :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
            size="32"
        ></v-avatar>

        <v-tabs
            centered
            class="ml-n9"
            color="grey darken-1"
        >
            <v-tab
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            >
            {{ link.title }}
            </v-tab>
        </v-tabs>    

        <v-avatar
            class="hidden-sm-and-down"
            color="grey darken-1 shrink"
            size="32"
        ></v-avatar>
    </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="12"
                >
                    <v-sheet
                    min-height="70vh"
                    rounded="lg"
                    >
                    <!-- Input profile info -->
                        <recruiterProfileInfo/>
                      
                        <v-container class="grey lighten-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                sm="4"
                                >
                                    <v-hover
                                    v-slot="{ hover }"
                                    open-delay="200"
                                    >
                                        <v-card
                                        @click="goToPostJob"
                                        :elevation="hover ? 16 : 2"
                                        :class="{ 'on-hover': hover }"
                                        class="mx-auto"
                                        height="200"
                                        max-width="350"
                                        >
                                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                                         <p>Post Job</p>
                                        </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-col>
                                 <v-col
                                cols="12"
                                sm="4"
                                >
                                    <v-hover
                                    v-slot="{ hover }"
                                    open-delay="200"
                                    >
                                        <v-card
                                        @click="goToJobRequisitionPage"
                                        :elevation="hover ? 16 : 2"
                                        :class="{ 'on-hover': hover }"
                                        class="mx-auto"
                                        height="200"
                                        max-width="350"
                                        >
                                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                                         <p>View Job Requisitions</p>
                                        </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-col>
                                 <v-col
                                cols="12"
                                sm="4"
                                >
                                    <v-hover
                                    v-slot="{ hover }"
                                    open-delay="200"
                                    >
                                        <v-card
                                        :elevation="hover ? 16 : 2"
                                        :class="{ 'on-hover': hover }"
                                        class="mx-auto"
                                        height="200"
                                        max-width="350"
                                        >
                                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                                         <p>View Candidates</p>
                                        </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-col>
                            </v-row>
                        </v-container>

                    </v-sheet>
                </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import recruiterProfileInfo from '../components/recruiterProfileInfo.vue';

    export default {
        components: {
            recruiterProfileInfo
        },
        data(){ 
            return {
               links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'},  
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Interviews', to: '/interviews'}
                ],
            }
        },
        methods: {
            goToPostJob(){
                this.$router.push("/post-job");
            },
            goToJobRequisitionPage(){
                this.$router.push("/job-requisition");
            }
        }
    }
</script>