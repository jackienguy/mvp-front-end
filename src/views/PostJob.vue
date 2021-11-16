<template>
  <v-app id="inspire">
      <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <v-col class="mx-auto" xs="12" lg="8">
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                        <!-- Job post input form -->
                            <JobPostForm/>
                           
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import JobPostForm from '../components/JobPostForm.vue';
import RecruiterTopNav from '../components/RecrutierTopNav.vue';


      export default {
        components: {
            JobPostForm,
            RecruiterTopNav,
        },        
      }
    
</script>