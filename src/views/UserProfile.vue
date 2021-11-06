<template>
  <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet 
                        rounded="lg"
                        height="70vh"
                        >
                            <!-- import user profile info -->
                            <ProfileInfo/>
                        </v-sheet>
                    </v-col>
                    
                    <v-col>
                    
                         <ResumeCard/>
                         
                    </v-col> 
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import UserTopNav from "../components/UserTopNav.vue";
import ProfileInfo from "../components/ProfileInfo.vue";
import ResumeCard from "../components/ResumeCard.vue";


    export default {
        components: {
            UserTopNav,
            ProfileInfo,
            ResumeCard
        },
    }
</script>

<style lang="scss" scoped>

</style>