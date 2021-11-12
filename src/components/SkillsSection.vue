<template>
    <div>
        <!-- <div v-if="isEditing" class="pa-12">
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
        </div> -->
        <div  class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Skills</b>    

                <v-btn 
                class="ml-4"
                fab
                outlined
                small
                color="teal lighten-3"
                @click="overlay = !overlay"
                >
                    <v-icon>
                        mdi-pencil
                    </v-icon>
                
                </v-btn>
                <v-overlay
                :z-index="zIndex"
                :value="overlay"
                >
                   <EditSkills
                        :hasSaved="editSkills.hasSaved"
                        :model="editSkills.model"
                        :skillType="editSkills.skillType"
                        :proficiencyLevel="editSkills.proficiencyLevel"
                        :isEditing="editSkills.isEditing"
                   />
                <v-btn
                    class="white--text"
                    color="teal"
                    @click="overlay = false"
                >
                    Cancel
                </v-btn>
                </v-overlay>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> {{skillType}} - {{proficiencyLevel}}</v-list-item-title>
        </div>
    </div>
</template>

<script>
import EditSkills from './EditSkills.vue';

  export default {
    name: "SkillsSection",
    components: {
        EditSkills,
    },
    props: {
        hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
        skillType: String,
        proficiencyLevel: String,
    },
    data() {
        return {
            editSkills: [],
            // for overlay
            overlay: false,
            zIndex: 5,
            
            }
        }
 }
        
    
  
</script>

<style lang="scss" scoped>

</style>