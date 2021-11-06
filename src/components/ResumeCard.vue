<template>
    <v-card
        class="overflow-hidden"
    >
        <v-toolbar
        flat
        color="yellow lighten-4"
        >
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
            User Profile
        </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
           
            <!-- input resume info -->
            <ResumeInfo/>

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
import ResumeInfo from '../components/ResumeInfo.vue';

  export default {
    components: {
       ResumeInfo
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
      } 
    }
}
</script>

<style lang="scss" scoped>

</style>