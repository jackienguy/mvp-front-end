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
        :title="experience.title"
        :companyName="experience.companyName"
        :workLocation="experience.workLocation"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
        :description="experience.description"
        @saveUpdateToExperience="getExperienceInfo"
        />
        
        <v-divider></v-divider>
        <!-- Education Section -->
        <EducationSection
        :userId="education.userId"
        :certificateName="education.certificateName"
        :major="education.major"
        :institutionLocation="education.institutionLocation"
        :institutionName="education.institutionName"
        :completionDate="education.completionDate"
        :other="education.other"
        />
        
        <v-divider></v-divider>
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
        this.getExperienceInfo(),
        this.getEduInfo(),
        this.getSkillsInfo()
    },
    methods: {
        getProfileData() {
            axios.request ({
                url: "http://youropp.ml/api/user",
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
                url: "http://youropp.ml/api/user/experience",
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
                url: "http://youropp.ml/api/user/education",
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
                url: "http://youropp.ml/api/user/skills",
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
    }
}
</script>

<style lang="scss" scoped>

</style>