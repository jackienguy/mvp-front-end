<template>
    <div>
        <div v-if="isEditing" class="pa-12">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Education</b> 
            </v-list-item-title> 
            <v-text-field
                :disabled="!isEditing"
                v-model="editedCertificateName"
                color="white"
                label="Educational credential *"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="editedMajor"
                color="white"
                label="major"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedLocation"
                color="white"
                label="City, State/Province *"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedInstitutionName"
                color="white"
                label="Institution Name *"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedCompletionDate"
                color="white"
                label="Completion Date *"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="editedOther"
                color="white"
                label="Other credentials"
            ></v-text-field>
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Education</b>        
                <v-btn
                class="ml-4"
                fab
                small
                @click="isEditing =!isEditing"
                >
                    <v-icon v-if="isEditing">
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> Bachelors of Commerce{{certificateName}} at Fake University{{institutionName}}, Edmonton, AB{{location}} </v-list-item-title>
            <v-list-item-subtitle>Major: Accounting {{major}} </v-list-item-subtitle>
            <v-list-item-subtitle>Jan 2020 {{completionDate}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
  export default {
    name: "EducationSection",
    props: {
        hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
        certificateName: String,
        major:  String,
        location:  String,
        institutionName:  String,
        completionDate:  String,
        other:  String,
    }, 
    data() {
        return {
            editedCertificateName: '',
            editedMajor: '',
            editedLocation: '',
            editedInstitutionName: '',
            editedCompletionDate: '',
            editedOther: ''
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>