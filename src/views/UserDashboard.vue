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
                        <v-toolbar class="pt-1" color="teal lighten-4">
                            <v-responsive max-width="400" >
                                <v-text-field
                                    dense
                                    flat
                                    hide-details
                                    rounded
                                    solo-inverted
                                    label=" Enter search"
                                     
                                > </v-text-field>
                               
                            </v-responsive> 
                          

                        <div class="pb-1 pl-5 text-center">
                            <v-chip
                            class="ma-2"
                            color="primary"
                            >
                            <v-icon>mdi-heart</v-icon>
                            Favorites
                            </v-chip>

                            <v-chip
                            class="ma-2 pa-4"
                            color="primary"
                            >
                            Popular
                            </v-chip>
                        </div>
                    </v-toolbar> 
                       
                        <div id="heading1" class="text-center pt-16 pb-6"> 
                            <h2>Featured Jobs</h2> 
                        </div>

                        <v-divider></v-divider>

                            <!-- Input job card display -->
                                <UserJobInfoView/>
                                    
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

<style lang="scss">
   
</style>