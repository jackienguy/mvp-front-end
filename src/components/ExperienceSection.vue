<template>
    <div>
        <div v-if="isEditing" class="pa-12">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Experience</b> 
            </v-list-item-title> 
            <v-text-field
                :disabled="!isEditing"
                v-model="editedWorkingTitle"
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
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Expereince</b>        
                <v-btn
                class="ml-4"
                fab
                small
                @click="isEditing = !isEditing"
                >
                    <v-icon v-if="isEditing">
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> {{workingTitle}} at {{companyName}}, {{workLocation}} </v-list-item-title>
            <v-list-item-subtitle> {{startDate}} - {{endDate}} </v-list-item-subtitle>
            <v-list-item-subtitle> {{description}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ExperienceSection",
    props: {
        hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
        workingTitle: String,
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
    }
  }
</script>

<style lang="scss" scoped>

</style>