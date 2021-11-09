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
        :userId="experience.userId"
        :workingTitle="experience.workingTitle"
        :companyName="experience.companyName"
        :workLocation="experience.workLocation"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
        :description="experience.description"
        @saveUpdateToExperience="getUpdatedExperienceInfo"
        />
        

        <!-- Education Section -->
        <EducationSection
        :userId="education.userId"
        :certificateName="education.certificateName"
        :major="education.major"
        :location="education.location"
        :institutionName="education.institutionName"
        :completionDate="education.completionDate"
        :other="education.other"
        
        />
        <!-- Skills Section -->
        <SkillsSection
        :userId="skills.userId"
        :skillType="skills.skillType"
        :proficiencyLevel="skills.proficiencyLevel"
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
            experience: [],
            skills: [],
            education: [],
            user: []
        }
    },
   mounted() {
        this.getProfileData(),
        this.getUpdatedExperienceInfo()
    },
    methods: {
        getUpdatedExperienceInfo() {
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