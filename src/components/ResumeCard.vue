<template>
    <v-card
        class="overflow-auto"
        width="50vw"
        height="100vh"
        rounded="lg"
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
        isEditing: null,
        model: null,
      }
    },
}
</script>

<style lang="scss" scoped>

</style>