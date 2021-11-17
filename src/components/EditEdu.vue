<template>
    <div class="pa-12">
        <v-list-item-title class="text-h6 mb-5 mt-5">
            <b>Education</b> 
        </v-list-item-title> 
        <v-text-field
            v-model="certificateName"
            color="white"
            label="Educational credential"
        ></v-text-field>
            <v-text-field
            v-model="major"
            color="white"
            label="major"
        ></v-text-field>
        <v-text-field
            v-model="institutionLocation"
            color="white"
            label="City, State/Province"
        ></v-text-field>
        <v-text-field
            v-model="institutionName"
            color="white"
            label="Institution Name"
        ></v-text-field>
        <v-text-field
            v-model="completionDate"
            color="white"
            label="Completion Date"
        ></v-text-field>
            <v-text-field
            v-model="other"
            color="white"
            label="Other credentials"
        ></v-text-field>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="ma-12 pa-4"
            outlined
            rounded
            small
            color="cyan"
            @click="saveEduEdits()"
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
import axios from 'axios';
import cookies from 'vue-cookies';

 export default {
    name: "EditEdu",
    data(){
        return {
            certificateName: "",
            major:"",
            institutionLocation: "",
            institutionName: "",
            completionDate: "",
            other: "",
            loginToken: "",
            userId: "",
            hasSaved: null,
        }
    }, 
    methods: {
        saveEduEdits(){
            axios.request({
                url: "http://youropp.ml/api/user/education",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    loginToken: cookies.get('loginToken'),
                    userId: cookies.get('userId'),
                    certificateName: this.certificateName,
                    major: this.major,
                    institutionName: this.institutionName,
                    completionDate: this.completionDate,
                    institutionLocation: this.institutionLocation,
                    other: this.other
                }
            }).then((response)=>{
                console.log(response);
                this.$router.push('/user-profile')
            }).catch((err)=>{
                console.error(err);
            })
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>