<template>
    <div>
        <div v-if="isEditing" class="pa-12">
            <EditExperience
            :hasSaved="editExp.hasSaved"
            :isEditing="editExp.isEditing"
            :model="editExp.model"
            :title="editExp.title"
            :companyName="editExp.companyName"
            :workLocation="workLocation"
            :description="editExp.description"
            :startDate="editExp.startDate"
            :endDate="editExp.endDate"
            />
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Experience</b>        
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
            <v-list-item-subtitle> {{startDate}} to {{endDate}} </v-list-item-subtitle>
            <v-list-item-subtitle>Completed: {{description}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
import EditExperience from "./EditExperience.vue";

  export default {
    name: "ExperienceSection",
    components: {
        EditExperience,
    },
    props: {
        hasSaved: Boolean,
        // isEditing: Boolean,
        model: Boolean,
        title: String,
        companyName:  String,
        workLocation:  String,
        description:  String,
        startDate:  String,
        endDate:  String,
    }, 
    data() {
        return {
           editExp: [],
           isEditing: null
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>