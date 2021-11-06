<template>
    <div>
        <!-- Personal details -->
        <PersonalDetails
        :userId="user.userId"
        :email="user.email"
        :firstName="user.firstName"
        :lastName="user.lastName"
        :phoneNumber="user.phoneNumber"
        />
         <!-- Experience Section -->
        <ExperienceSection
        :userId="resume.userId"
        :workingTitle="resume.workingTitle"
        :companyName="resume.companyName"
        :location="resume.location"
        :startDate="resume.startDate"
        :endDate="resume.endDate"
        :description="resume.description"
        />
        

        <!-- Education Section -->
        <EducationSection
        :userId="resume.userId"
        :certificateName="resume.certificateName"
        :major="resume.major"
        :location="resume.location"
        :institutionName="resume.institutionName"
        :completionDate="resume.completionDate"
        :other="resume.other"
        
        />
        <!-- Skills Section -->
        <SkillsSection
        :userId="resume.userId"
        :skillType="resume.skillType"
        :description="resume.description"
        :proficiencyLevel="resume.proficiencyLevel"
        />

    </div>
</template>

<script>
import EducationSection from '../components/EducationSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import PersonalDetails from './PersonalDetails.vue';
import axios from 'axios';
import cookies from 'vue-cookies';

  export default {
    name: "ResumeInfo",
    components: {
        EducationSection,
        ExperienceSection,
        SkillsSection,
        PersonalDetails
    },
    data() {
        return {
            resume: [],
            user: []
        }
    },
   mounted() {
        this.getResumeInfo(),
        this.getProfileData()  
    },
    methods: {
        getResumeInfo() {
            axios.request ({
                url: "http://127.0.0.1:5000/api/resume",
                methods: "GET",
                params: {
                    userId: cookies.get('userId')
                }
            }).then((response)=>{
                console.log(response);
                this.resume = response.data
            }).catch((err)=>{
                console.error(err);
            })
        },
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>