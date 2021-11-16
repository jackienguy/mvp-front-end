<template>
  <v-app id="inspire">
    <!-- Import top nav component -->
      <RecruiterTopNav/> 
        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <v-col class="mx-auto" xs="12" lg="10">
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                            <div class="text-center pt-10 pb-6">
                                <h2>Job Requisitions</h2>
                            </div>

                            <v-divider></v-divider>

                            <ReqCard/>
    
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import RecruiterTopNav from '../components/RecrutierTopNav.vue';
import ReqCard from '../components/ReqCard.vue';


    export default {
        components: {
            RecruiterTopNav,
            ReqCard,
           
    
        },
        data(){ 
            return {
                // Top nav
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'}, 
                    {title:'Messages', to: ''}, 
                    {title:'Interviews', to: ''}
                ],
                // Profile card
                hasSaved: false,
                isEditing: null,
                model: null,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
               
            }
        }        
    }
</script>