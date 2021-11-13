<template>
    <div class="pa-5">
        <v-list-item-title class="text-h6 mb-5 mt-5">
            <b>Education</b>        
            <v-btn
            class="ml-4"
            fab
            outlined
            small
            color="teal lighten-3"
            @click="editEduBtn()"
            >
                <v-icon>
                mdi-pencil
                </v-icon>
            </v-btn>
        </v-list-item-title>
        <v-list-item-title class="text-h7"> {{certificateName}} at {{institutionName}}, {{institutionLocation}} </v-list-item-title>
        <v-list-item-subtitle> {{major}} </v-list-item-subtitle>
        <v-list-item-subtitle>Completed: {{completionDate}} </v-list-item-subtitle>
    </div>
</template>

<script>

  export default {
    name: "EducationSection",
    props: {
        model: Boolean,
        certificateName: String,
        major:  String,
        institutionLocation:  String,
        institutionName:  String,
        completionDate:  String,
        other:  String,
    }, 
    methods: {
        editEduBtn(){
           this.$router.push('/edit-resume')
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>