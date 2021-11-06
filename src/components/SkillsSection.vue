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
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Skills</b>        
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
            <v-list-item-title class="text-h7"> MS Suite{{skillType}} - Advanced{{proficiencyLevel}}</v-list-item-title>
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