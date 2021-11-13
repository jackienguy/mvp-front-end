<template>
    <div  class="pa-5">
        <v-list-item-title class="text-h6 mb-5 mt-5">
            <b>Skills</b>    
        </v-list-item-title>
        <v-list-item-title class="text-h7"> {{skillType}} - {{proficiencyLevel}}</v-list-item-title>
    </div>
   
</template>

<script>

  export default {
    name: "SkillsSection",
    
    props: {
        model: Boolean,
        skillType: String,
        proficiencyLevel: String,
    },
 }
        
    
  
</script>

<style lang="scss" scoped>

</style>