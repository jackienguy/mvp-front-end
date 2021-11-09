<template>
    <div>
        <div v-if="isEditing" class="pa-12">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Skills</b> 
            </v-list-item-title> 
            <v-text-field
                :disabled="!isEditing"
                v-model="editedSkillType"
                color="white"
                label="Skill"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="editedProficiencyLevel"
                color="white"
                label="Proficiency Level (Basic, Intermediate, or Advanced)"
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
                <b>Skills</b>        
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
            <v-list-item-title class="text-h7"> {{skillType}} - {{proficiencyLevel}}</v-list-item-title>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SkillsSection",
    props: {
        hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
        skillType: String,
        proficiencyLevel: String,
    },
    data() {
        return {
            editedSkillType: "",
            editedProficiencyLevel: "",
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>