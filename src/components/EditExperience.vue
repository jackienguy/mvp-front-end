<template>
     <div class="pa-12">
        <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Experience</b> 
            </v-list-item-title> 
            <v-text-field
                v-model="title"
                color="Title"
            ></v-text-field>
                <v-text-field
                v-model="companyName"
                color="white"
                label="Company Name"
            ></v-text-field>
            <v-text-field
                v-model="workLocation"
                color="white"
                label="Work Location"
            ></v-text-field>
            <v-text-field
                v-model="description"
                color="white"
                label="Description"
            ></v-text-field>
            <v-text-field
                v-model="startDate"
                color="white"
                label="Start Date *"
            ></v-text-field>
                <v-text-field
                v-model="endDate"
                color="white"
                label="End Date"
            ></v-text-field>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                class="ma-12 pa-4"
                outlined
                rounded
                small
                color="cyan"
                @click="saveEditExperience()"
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
        name: "EditExperience",
        data() {
            return {
                hasSaved: null,
                title: '',
                companyName: '',
                workLocation: '',
                description: '',
                startDate: '',
                endDate: '',
            }
        }, 
        methods: {
            saveEditExperience(){
                axios.request({
                    url: "http://127.0.0.1:5000/api/user/experience",
                    methods: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get('loginToken'),
                        userId: cookies.get('userId'),
                        title: this.title,
                        companyName: this.companyName,
                        workLocation: this.workLocation,
                        description: this.description,
                        startDate: this.startDate,
                        endDate: this.endDate,
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