<template>
  <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="teal lighten-3">
            <v-container class="pt-10">
                <v-row>
                    <!-- import user profile info -->
                    <ProfileInfo/>
                </v-row>  
                <v-row>
                     <v-col class="mx-auto" xs="12" lg="10">
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                        <div id="searchBar">
                            <v-responsive max-width="400" class="pa-10">
                                <v-text-field
                                    dense
                                    flat
                                    hide-details
                                    rounded
                                    solo-inverted
                                    label="Enter search"
                                ></v-text-field>
                            </v-responsive>  
                        </div>

                        <div class="ml-16">
                            <v-chip
                            class="ma-2 pa-4"
                            color="primary"
                            >
                            Popular
                            </v-chip>

                            <v-chip
                            class="ma-2 pa-4"
                            color="primary"
                            >
                            Trending
                            </v-chip>

                            <v-chip
                            class="ma-2 pa-4"
                            color="primary"
                            >
                            Remote
                            </v-chip>

                             <v-chip
                            class="ma-2"
                            color="primary"
                            >
                            <v-icon>mdi-heart</v-icon>
                            Favorites
                            </v-chip>
                        </div>

                        <v-divider></v-divider>

                        <div class="text-center pt-16 pb-6"> 
                            <h2>Featured Jobs</h2> 
                        </div>

                        <v-divider></v-divider>

                        <v-layout justify-center>
                            <v-flex xs 12>
                            
                                <UserJobInfoView/>
                                </v-flex>
                        </v-layout>
                        
                        </v-sheet>   
                    </v-col> 
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue';
import UserTopNav from '../components/UserTopNav.vue';
import UserJobInfoView from '../components/UserJobInfoView.vue'


    export default {
        components: {
            ProfileInfo,
            UserTopNav,
            UserJobInfoView
        },
        methods: {
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }
    }
</script>

<style lang="sass">

</style>