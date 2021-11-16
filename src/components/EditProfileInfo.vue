<template>
    <div class="pa-12">
        <v-list-item-title class="text-h6 mb-5 mt-5">
            <b>Profile</b> 
        </v-list-item-title> 
        <v-text-field
            v-model="firstName"
            color="white"
            label="First Name"
        > {{firstName}}</v-text-field>
         <v-text-field
            v-model="lastName"
            color="white"
            label="Last Name"
        ></v-text-field>
         <v-text-field
            v-model="email"
            color="white"
            label="Email"
        ></v-text-field>
        <v-text-field
            v-model="organizationName"
            color="white"
            label="Company Name"
        ></v-text-field>
            <v-text-field
            v-model="location"
            color="white"
            label="Location"
        >{{location}}</v-text-field>
        <v-text-field
            v-model="workingTitle"
            color="white"
            label="Working Title"
        ></v-text-field>
        <v-text-field
            v-model="phoneNumber"
            color="white"
            label="Phone Number"
        ></v-text-field>
        <v-text-field
            v-model="companyWebsite"
            color="white"
            label="Company Website"
        ></v-text-field>
        
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="ma-2 pa-5"
            outlined
            rounded
            small
            color="cyan"
            @click="saveEdits()"
        >
            Save
        </v-btn>

        <v-btn
            class="ma-2 pa-5"
            outlined
            rounded
            small
            color="cyan"
            @click="cancelEdit()"
        >
            Cancel
        </v-btn>
       
        </v-card-actions>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

 export default {
    name: "EditEdu",
    data(){
        return {
            userId: '',
            loginToken: '',
            organizationName: '',
            location: '',
            companyWebsite: '',
            workingTitle: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            email: '',
            role:'',
            hasSaved: null,
        }
    }, 
    methods: {
        saveEdits(){
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
                        workingTitle: this.workingTitle,
                        phoneNumber: this.phoneNumber,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                    },
                }).then((response)=>{
                    cookies.get('loginToken'),
                    console.log(response);
                    if (response.data.role == 'recruiter') {
                        this.$router.push("/recruiter-dashboard");
                    } else {
                        this.$router.push("/user-dashboard")
                    }
                }).catch((err)=>{
                    console.error(err);
                })
        },cancelEdit() {
            if (this.role == 'recruiter') {
                this.$router.push("/recruiter-dashboard");
            } else {
                this.$router.push("/user-dashboard");
            }
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>