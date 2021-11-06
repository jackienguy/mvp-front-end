<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
        >
    </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                        <!-- Job post input form -->
                            <v-form 
                            class="pl-16 pt-8"
                            v-model="valid"
                            >
                                <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        md="12"
                                        >
                                            <h2>Welcome to OPP as a job seeker! Let's get you set up</h2>
                                       

                                        <!-- input form -->
                                            <UserGetStartedForm/>
                                        </v-col>
                                    </v-row>
                                   
                                    <v-btn class="ma-3" @click="updateRecruiterProfile"> Submit </v-btn>
                                  
                                </v-container>
                            </v-form>
                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import UserGetStartedForm from '../components/UserGetStartedForm.vue'

    export default {
        components: {
            UserGetStartedForm,
        },
        data(){ 
            return {
                valid: false,
                userId: '',
                loginToken: '',
                organizationName: '',
                location: '',
                companyWebsite: '',
                workingTitle: '',
                phoneNumber: '',
                requiredRule: [
                    v => !!v || 'This field is required',
                ]
            }
        },
        methods: {
            updateRecruiterProfile(){
                 axios.request({
                    url:"http://127.0.0.1:5000/api/user",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                     },
                     data: {
                        loginToken: cookies.get ('loginToken'),
                        organizationName: this.organizationName,
                        location: this.location,
                        companyWebsite: this.companyWebsite,
                        workingTitle: this.workingTitle
                     },
                 }).then((response)=>{
                    cookies.get('loginToken'),
                    console.log(response);
                    this.$router.push("/recruiter-dashboard")
                 }).catch((err)=>{
                     console.error(err);
                 })
            }
        }
    }
</script>