<template>
    <div>
         <v-card
            class="mx-auto pa-8 ma-5 overflow-auto"
            width="50vw"
            height="60vh"
            rounded="lg"
            color="blue-grey lighten-4"
        >
            <v-card-text color="black"> 

                     <v-col
                        cols="12"
                        md="12"
                        >
                            <h2>Skills</h2>
                        </v-col>
                        
                        <v-col
                        cols="12"
                        md="6"
                        >
                            <p>Skill Type </p>
                            <v-text-field
                                v-model="skillType"
                                solo
                                clearable
                            ></v-text-field>
                            <p>Proficiency Level</p>
                            <v-text-field
                                v-model="proficiencyLevel"
                                solo
                                label="Basic, Intermediate, or Advanced"
                                clearable
                            ></v-text-field>
                        </v-col>
                   

                      <v-card-actions>
                        <v-btn
                            class="ml-2 mt-5 pa-4"
                            outlined
                            rounded
                            small
                            color="cyan"
                            @click="saveEditSkills()"
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
              
         
            </v-card-text>
            </v-card>
       
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name: "ExperienceSection",
        props: {
            hasSaved: Boolean,
            isEditing: Boolean,
            model: Boolean,
            skillType: String,
            proficiencyLevel: String,
        }, 
        methods: {
            saveEditSkills () {
                axios.request({
                    url: "",
                    method: "PATCH",
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>