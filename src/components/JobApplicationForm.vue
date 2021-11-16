<template>
    <v-row>
          <v-col class="mx-auto" xs="10" lg="8">
            <v-card
                class="mx-auto pa-8 ma-5 overflow-auto"
                height="70vh"
                rounded="lg"
                color="blue-grey lighten-4"
            >
                <v-card-text> 
            
                    <!-- Personal details section -->
                    <div class="text--primary">
                        <PersonalDetails
                        :userId="user.userId"
                        :email="user.email"
                        :firstName="user.firstName"
                        :lastName="user.lastName"
                        :phoneNumber="user.phoneNumber"
                        />
                    </div>

                    <v-divider></v-divider>

                    <!-- Experience section -->
                    <div class="text--primary">
                        <ExperienceSection
                        :userId="experience.userId"
                        :title="experience.title"
                        :companyName="experience.companyName"
                        :workLocation="experience.workLocation"
                        :startDate="experience.startDate"
                        :endDate="experience.endDate"
                        :description="experience.description"
                        @saveUpdateToExperience="getExperienceInfo"
                        />
                    </div>

                    <v-divider></v-divider>

                    <!-- Education Section -->
                    <div class="text--primary">
                        <EducationSection
                        :userId="education.userId"
                        :certificateName="education.certificateName"
                        :major="education.major"
                        :institutionLocation="education.institutionLocation"
                        :institutionName="education.institutionName"
                        :completionDate="education.completionDate"
                        :other="education.other"
                        />
                    </div>

                    <v-divider></v-divider>
                    <!-- SKills section -->
                    <div class="text--primary">
                        <SkillsSection
                        :userId="skills.userId"
                        :skillType="skills.skillType"
                        :proficiencyLevel="skills.proficiencyLevel"
                        /> 
                    </div>

                </v-card-text>

                <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        small
                        color="cyan"
                        @click="submitApplication(), alert = !alert"
                    >
                        Submit Application
                    </v-btn>

                    <v-alert
                    class="ml-5"
                    :value="alert"
                    outlined
                    type="success"
                    text
                    transition="scale-transition"
                    >
                        Your application have been submitted
                    </v-alert>
                </v-card-actions>
            </v-card>  
        </v-col>
    </v-row>
</template>

<script>
import EducationSection from '../components/EducationSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import PersonalDetails from './PersonalDetails.vue';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "JobApplicationForm",
        components: {
            EducationSection,
            ExperienceSection,
            SkillsSection,
            PersonalDetails
        },
        props: {
            jobId: Number
        },
        data() {
            return {
                alert: null,
                experience: [],
                skills: [],
                education: [],
                user: []
            }
        },
        mounted() {
            this.getProfileData(),
            this.getExperienceInfo(),
            this.getEduInfo(),
            this.getSkillsInfo()
        },
        methods: {
            getProfileData() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.user = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
            getExperienceInfo() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user/experience",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.experience = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
            getEduInfo() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user/education",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.education = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
            getSkillsInfo() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/user/skills",
                    methods: "GET",
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response)=>{
                    console.log(response);
                    this.skills = response.data
                }).catch((err)=>{
                    console.error(err);
                })
            },
        // Submitting application 
            submitApplication() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/application",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: { 
                        loginToken: cookies.get('loginToken'),
                        jobId: this.jobId
                    }
                }).then((response)=>{
                    console.log(response);
                    this.numApplicants += 1;
                
                }).catch((err)=>{
                    console.error(err);
                })
            }
    }
}
</script>

<style lang="scss" scoped>

</style>