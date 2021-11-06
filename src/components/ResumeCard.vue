<template>
    <v-card
        class="overflow-hidden"
    >
        <v-toolbar
        flat
        color="purple"
        >
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
            User Profile
        </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <div class="pa-5">
                <v-list-item-title class="text-h6 mb-5">
                   <b>Personal Details</b> 
                </v-list-item-title>
                <v-list-item-title class="text-h7"> Joe Wong{{firstName}} {{lastName}} </v-list-item-title>
                <v-list-item-subtitle> email{{email}}</v-list-item-subtitle>
                <v-list-item-subtitle> phone{{phoneNumber}}</v-list-item-subtitle>
            </div>
            <v-divider></v-divider>
            <!-- Experience Section -->
            <ExperienceSection/>
            <!-- Education Section -->
            <EducationSection/>
            <!-- Skills Section -->
            <SkillsSection/>
        </v-card-text>
        <v-divider></v-divider>
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
    </v-card>
</template>

<script>
import EducationSection from '../components/EducationSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import SkillsSection from '../components/SkillsSection.vue';

  export default {
    components: {
        EducationSection,
        ExperienceSection,
        SkillsSection
    },
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
      }
    },

    methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>