<template>
    <v-app id="inspire">
       <RecruiterTopNav/>
        <v-main class="teal lighten-3">
            <v-container class="mt-">
                <v-row>
                     <ProfileInfo/>
                </v-row>
                <v-row>
                    <v-col class="mx-auto" xs="12" lg="10">
                        <v-sheet
                        min-height="80vh"
                        rounded="lg"
                        >
                        <v-container class="grey lighten-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                sm="4"
                                class="mr-0"
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
                                        max-width="200"
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
                                          max-width="200"
                                        >
                                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                                            <p>View Job Requisitions</p>
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
import ProfileInfo from '../components/ProfileInfo.vue';
import RecruiterTopNav from '../components/RecrutierTopNav.vue'

    export default {
        components: {
            ProfileInfo,
            RecruiterTopNav
        },
        methods: {
            goToPostJob(){
                this.$router.push("/post-job");
            },
            goToJobRequisitionPage(){
                this.$router.push("/job-requisition");
            },
        }
    }
</script>