<template>
   <div class="pa-12">
    <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Skills</b> 
            </v-list-item-title> 
            <v-text-field
                v-model="skillType"
                color="white"
                label="Skill"
            ></v-text-field>
            <v-text-field
                v-model="proficiencyLevel"
                color="white"
                label="Proficiency Level (Basic, Intermediate, or Advanced)"
            ></v-text-field>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               class="ma-12 pa-4"
                outlined
                rounded
                small
                color="cyan"
                @click="saveSkillsEdit()"
            >
                Save
            </v-btn>
            </v-card-actions>
            <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left
            >
            Your profile has been updated
            </v-snackbar>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "EditSkills",
        data() {
            return {
                skillType: "",
                proficiencyLevel: "",
                loginToken: "",
                userId: "",
                hasSaved: null,
            }
        }, 
        methods: {
            saveSkillsEdit() {
                axios.request({
                url: "http://127.0.0.1:5000/api/user/skills",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    loginToken: cookies.get('loginToken'),
                    userId: cookies.get('userId'),
                    skillType: this.skillType,
                    proficiencyLevel: this.proficiencyLevel,
                }
            }).then((response)=>{
                cookies.get('loginToken'),
                console.log(response);
            }).catch((err)=>{
                console.error(err);
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>