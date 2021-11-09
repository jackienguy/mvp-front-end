<template>
    <div>
        <div v-if="isEditing" class="pa-12">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Experience</b> 
            </v-list-item-title> 
            <v-text-field
                :disabled="!isEditing"
                v-model="editedtitle"
                color="white"
                label="Working Title"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="editedCompanyName"
                color="white"
                label="Company Name"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedWorkLocation"
                color="white"
                label="City, State/Province"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedStartDate"
                color="white"
                label="Start Date"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedEndDate"
                color="white"
                label="End Date"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="editedDescription"
                color="white"
                label="Description"
            ></v-text-field>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!isEditing"
                color="success"
                @click="saveUpdateToExperience"
            >
                Save
            </v-btn>
            </v-card-actions>
        </div>

        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Expereince</b>        
                <v-btn
                class="ml-4"
                fab
                outlined
                small
                color="teal lighten-3"
                @click="isEditing = !isEditing"
                >
                    <v-icon v-if="isEditing" dark>
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> {{title}} at {{companyName}}, {{workLocation}} </v-list-item-title>
            <v-list-item-subtitle> {{startDate}} - {{endDate}} </v-list-item-subtitle>
            <v-list-item-subtitle> {{description}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

  export default {
    name: "ExperienceSection",
    props: {
        isEditing: Boolean,
        hasSaved: Boolean,
        model: Boolean,
        title: String,
        companyName: String,
        workLocation: String,
        startDate: String,
        endDate: String,
        description: String,
    },
    data() {
        return {
            editedWorkingTitle: "",
            editedCompanyName: "",
            editedWorkLocation: "",
            editedStartDate: "",
            editedEndDate: "",
            editedDescription: ""
        }
    },
      methods: {
      saveUpdateToExperience() {
        this.isEditing = !this.isEditing
        this.hasSaved = true
        axios.request({
            url: "http://127.0.0.1:5000/api/users/experience",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                loginToken: cookies.get('loginToken'),
                editedtitle: this.editedtitle,
                editedCompanyName: this.editedCompanyName,
                editedWorkLocation: this.editedWorkLocation,
                editedStartDate: this.editedStartDate,
                editedEndDate: this.editedEndDate,
                editedDescription: this.editedDescription
            }
        }).then((response)=>{
            cookies.get('loginToken'),
            console.log(response);
            this.$emit('saveUpdateToExperience', this.editedtitle, this.editedCompanyName, this.editedWorkLocation, this.editedStartDate, this.editedEndDate, this.editedDescription);
        }).catch((err)=>{
            console.error(err.response);
        })
      } 
    }
  }
</script>

<style lang="scss" scoped>

</style>