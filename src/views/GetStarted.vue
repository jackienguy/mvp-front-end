<template>
   <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
            >
        </v-app-bar>

        <v-main class="teal lighten-3">
            <v-container>
                <v-row>
                    <v-col lg="8" class="mx-auto">
                         <h2 id="message">Welcome to <strong id="logo">OPP</strong> as a recruiter! Let's get you set up</h2>

                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        class="mt-6"
                        >
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
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="6"
                                        >
                                            <p>Company Name *</p>
                                            <v-text-field
                                                v-model="organizationName"
                                                :rules="requiredRule"
                                                solo
                                                label="name"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Location *</p>
                                            <v-text-field
                                                v-model="location"
                                                solo
                                                :rules="requiredRule"
                                                label="city, province/state"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Your working title with your company *</p>
                                            <v-text-field
                                                v-model="workingTitle"
                                                :rules="requiredRule"
                                                solo
                                                label="title"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Your phone number *</p>
                                            <v-text-field
                                                v-model="phoneNumber"
                                                :rules="requiredRule"
                                                solo
                                                label="(xxx)-xxx-xxxx"
                                                clearable
                                                required
                                            ></v-text-field>
                                           <p>Link to your company's website</p>
                                            <v-text-field
                                                v-model="companyWebsite"
                                                solo
                                                label="url"
                                                clearable
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                   
                                    <v-btn
                                    class="mb-6 mr-4 pa-4"
                                    outlined
                                    rounded
                                    small
                                    color="cyan"
                                    @click="updateRecruiterProfile"
                                    > 
                                        Submit 
                                    </v-btn>
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

    export default {
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

<style lang="scss" scoped>
    #message {
        text-align: center;
        padding: 20px
    }
    #logo {
        color: yellow;
    }
</style>