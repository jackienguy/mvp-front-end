<template>
  <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <!-- import user profile info -->
                    <ProfileInfo/>      
                </v-row>
                    <v-row>
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