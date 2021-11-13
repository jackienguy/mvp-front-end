<template>
    <div class="pa-5">
        <v-list-item-title class="text-h6 mb-5 mt-5">
            <b>Experience</b>        
        </v-list-item-title>
        <v-list-item-title class="text-h7"> {{title}} at {{companyName}}, {{workLocation}} </v-list-item-title>
        <v-list-item-subtitle> {{startDate}} to {{endDate}} </v-list-item-subtitle>
        <v-list-item-subtitle>{{description}} </v-list-item-subtitle>
    </div>
</template>

<script>

  export default {
    name: "ExperienceSection",
    props: {
        model: Boolean,
        title: String,
        companyName:  String,
        workLocation:  String,
        description:  String,
        startDate:  String,
        endDate:  String,
    }, 
  }

</script>

<style lang="scss" scoped>

</style>