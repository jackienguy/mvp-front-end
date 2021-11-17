<template>
    <div>
        <v-col
        class="pa-8 d-flex justify-center"
        cols="12"
        md="12"
        >
            <h2 id="message">Welcome to <strong id="logo">OPP</strong> as a job seeker! Let's get you set up</h2>
        </v-col>

        <v-stepper class="mx-auto" v-model="e1" width="60vw" height="90vh">
            <v-stepper-header>
            <v-stepper-step
                :complete="e1 > 1 "
                step="1"
            >
                Experience
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 2"
                step="2"
            >
                Education
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
                Skills
            </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items >
            <v-stepper-content step="1">
                <v-card
                class="mb-12 pa-12 overflow-auto"
                color="grey lighten-2"
                height="60vh"
                >
                    <!-- Experience section -->
                    <v-row> 
                        <v-col
                        cols="12"
                        md="12"
                        >
                        
                            <h2>Experience</h2>
                        </v-col>

                        <v-col
                        cols="12"
                        md="6"
                        >
                            <p>Company Name *</p>
                            <v-text-field
                                v-model="companyName"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>Location *</p>
                            <v-text-field
                                v-model="workLocation"
                                solo
                                :rules="requiredRule"
                                label="city, province/state"
                                clearable
                                required
                            ></v-text-field>
                            <p>Your working title with your company *</p>
                            <v-text-field
                                v-model="title"
                                :rules="requiredRule"
                                solo
                                label="title"
                                clearable
                                required
                            ></v-text-field>
                            <p>Start Date (YYYY-MM-DD) *</p>
                            <v-text-field
                                v-model="startDate"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>End Date *</p>
                            <v-text-field
                                v-model="endDate"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>Description *</p>
                            <v-text-field
                                v-model="description"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>

                <v-btn
                class="mb-6 mr-4 pa-4"
                rounded
                small
                color="cyan"
                @click="e1 = 2; submitExperience()"
                >
                Continue
                </v-btn>

                <v-btn 
                class="mb-6 mr-4 pa-4"
                outlined
                rounded
                small
                color="cyan"
                >
                Cancel
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                class="mb-12 pa-12 overflow-auto"
                color="grey lighten-1"
                height="60vh"
                >
                    <!--input for education -->
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        >
                            <h2>Education</h2>
                        </v-col>

                        <v-col
                        cols="12"
                        md="6"
                        >
                            <p>Certificate Name *</p>
                            <v-text-field
                                v-model="certificateName"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>major</p>
                            <v-text-field
                                v-model="major"
                                solo
                                clearable
                            ></v-text-field>
                            <p>Location *</p>
                            <v-text-field
                                v-model="institutionLocation"
                                solo
                                :rules="requiredRule"
                                label="city, province/state"
                                clearable
                                required
                            ></v-text-field>
                            <p>Institution Name *</p>
                            <v-text-field
                                v-model="institutionName"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>completionDate *</p>
                            <v-text-field
                                v-model="completionDate"
                                :rules="requiredRule"
                                solo
                                clearable
                                required
                            ></v-text-field>
                            <p>other</p>
                            <v-text-field
                                v-model="other"
                                solo
                                clearable
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>

                <v-btn
                class="mb-6 mr-4 pa-4"
                rounded
                small
                color="cyan"
                @click="e1 = 3; submitEducation()"
                >
                Continue
                </v-btn>

                <v-btn 
                @click="e1 = 1" 
                class="mb-6 mr-4 pa-4"
                outlined
                rounded
                small
                color="cyan"
                >
                Go Back
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
               <v-card
                class="mb-12 pa-12 overflow-auto"
                color="grey lighten-1"
                height="60vh"
                >
                    <!-- input for skills -->
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        >
                            <h2>Skills</h2>
                        </v-col>
                        
                        <v-col
                        cols="12"
                        md="6"
                        >
                            <p>Skill Type </p>
                            <v-text-field
                                v-model="skillType"
                                solo
                                clearable
                            ></v-text-field>
                            <p>Proficiency Level</p>
                            <v-text-field
                                v-model="proficiencyLevel"
                                solo
                                label="basic, intermediate, advanced"
                                clearable
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>

                <v-btn
                rounded
                small
                color="cyan"
                @click="submitSkills()"
                >
                Continue
                </v-btn>

                 <v-btn 
                @click="e1 = 2" 
                outlined
                rounded
                small
                color="cyan"
                >
                Go Back
                </v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

  export default {
    data () {
        return {
            e1: 1,
            requiredRule: [
                v => !!v || 'This field is required',
            ],
            // Experience 
            companyName: '',
            workLocation: '',
            startDate: '',
            endDate: '',
            title: '',
            description: '',
            // education
            certificateName: '',
            major: '',
            institutionLocation: '',
            institutionName: '',
            completionDate: '',
            other: '',
            // skills
            skillType: '',
            proficiencyLevel: '',
        }
    },
    methods: {
        submitExperience() {
            axios.request ({
                url: "http://youropp.ml/api/user/experience",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    loginToken: cookies.get('loginToken'),
                    companyName: this.companyName,
                    workLocation: this.workLocation,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    title: this.title,
                    description: this.description,
                }
            }).then((response)=>{
                cookies.get('loginToken'),
                console.log(response);
            }).catch((err)=>{
                console.error(err);
            })
        },
        submitEducation() {
            axios.request ({
                url: "http://youropp.ml/api/user/education",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    loginToken: cookies.get('loginToken'),
                    certificateName: this.certificateName,
                    major: this.major,
                    institutionLocation: this.institutionLocation,
                    institutionName: this.institutionName,
                    completionDate: this.completionDate,
                    other: this.other,
                }
            }).then((response)=>{
                cookies.get('loginToken'),
                console.log(response);
            }).catch((err)=>{
                console.error(err);
            })
        },
         submitSkills() {
            axios.request ({
                url: "http://youropp.ml/api/user/skills",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    loginToken: cookies.get('loginToken'),
                    skillType: this.skillType,
                    proficiencyLevel: this.proficiencyLevel
                }
            }).then((response)=>{
                cookies.get('loginToken'),
                console.log(response);
                this.$router.push("/user-dashboard")
            }).catch((err)=>{
                console.error(err);
            })
        }
    }
  }
</script>

<style lang="scss" >
    #logo {
        color: yellow;
    }
    #message {
        text-align: center;
    }
</style>

