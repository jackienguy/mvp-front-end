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
                v-model="editedInstitutionLocation"
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

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!isEditing"
                color="success"
                @click="save"
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
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Education</b>        
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
            <v-list-item-title class="text-h7"> {{certificateName}} at {{institutionName}}, {{institutionLocation}} </v-list-item-title>
            <v-list-item-subtitle> {{major}} </v-list-item-subtitle>
            <v-list-item-subtitle>Completed: {{completionDate}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
  export default {
    name: "EducationSection",
    props: {
        // hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
        certificateName: String,
        major:  String,
        institutionLocation:  String,
        institutionName:  String,
        completionDate:  String,
        other:  String,
    }, 
    data() {
        return {
            editedCertificateName: '',
            editedMajor: '',
            editedInstitutionLocation: '',
            editedInstitutionName: '',
            editedCompletionDate: '',
            editedOther: ''
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>