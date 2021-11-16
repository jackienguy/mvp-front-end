<template>
  <v-col class="mx-auto" xs="12" lg="10">
      <v-sheet
      min-height="80vh"
      rounded="lg"
      >
    <v-card
        class="mx-auto overflow-auto pa-16"
        
        height="100vh"
        rounded="lg"
    >
        <v-toolbar
        flat
        >
        <v-icon color="yellow">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-thick">
            User Resume
        </v-toolbar-title>
         <v-btn
            class="ml-4"
            fab
            outlined
            small
            color="teal lighten-3"
            @click="editResumeBtn()"
            >
                <v-icon>
                mdi-pencil
                </v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text>
           
            <!-- input resume info -->
            <ResumeInfo/>

        </v-card-text>
    </v-card>
      </v-sheet>
   </v-col>
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
    methods: {
      editResumeBtn() {
         this.$router.push('/edit-resume')
      }
    }
}
</script>

<style lang="scss" scoped>

</style>