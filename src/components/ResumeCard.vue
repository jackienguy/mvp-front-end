<template>
    <v-card
        class="overflow-auto"
        width="50vw"
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