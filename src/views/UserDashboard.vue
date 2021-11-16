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
                        <v-responsive max-width="400">
                            <v-text-field
                            class="ma-8"
                            dense
                            flat
                            hide-details
                            rounded
                            solo-inverted
                            label="Search Job"
                            ></v-text-field>
                        </v-responsive>
                        <v-divider></v-divider>

                        <v-layout justify-center>
                            <v-flex xs 12>
                            <div> <h3>Featured Jobs</h3> </div>
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