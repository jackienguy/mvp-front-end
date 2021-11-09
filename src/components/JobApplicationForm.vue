<template>
    <div>
        <v-card
            class="mx-auto pa-8 mb-5 overflow-auto"
            max-width="70vw"
            height="100vh"
            rounded="lg"
        >
            <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">
                be•nev•o•lent
            </p>
            <p>adjective</p>
            <v-divider></v-divider>

            <!-- Experience section -->
            <div class="text--primary">
                <v-list-item-title class="text-h6 mb-5 mt-5">
                    <b>Expereince</b>        
                </v-list-item-title>
                <v-list-item-title class="text-h7"> {{title}} at {{companyName}}, {{workLocation}} </v-list-item-title>
                <v-list-item-subtitle> {{startDate}} - {{endDate}} </v-list-item-subtitle>
                <v-list-item-subtitle> {{description}} </v-list-item-subtitle>
            </div>

            <v-divider></v-divider>

            <!-- Education Section -->
             <div class="text--primary">
                <v-list-item-title class="text-h6 mb-5 mt-5">
                    <b>Education</b>        
                </v-list-item-title>
                <v-list-item-title class="text-h7"> {{certificateName}} at {{institutionName}}, {{institutionLocation}} </v-list-item-title>
                <v-list-item-subtitle>Major: {{major}} </v-list-item-subtitle>
                <v-list-item-subtitle>Completed: {{completionDate}} </v-list-item-subtitle>
            </div>

            <v-divider></v-divider>
            <!-- SKills section -->
            <div class="text--primary">
                <v-list-item-title class="text-h6 mb-5 mt-5">
                    <b>Skills</b>          
                </v-list-item-title>
                <v-list-item-title class="text-h7"> {{skillType}} - {{proficiencyLevel}}</v-list-item-title>
            </div>

            </v-card-text>

            <v-card-actions>
                <v-btn
                    class="ml-2 mt-5 pa-4"
                    outlined
                    rounded
                    small
                    color="cyan"
                  >
                    Submit Application
                  </v-btn>
            </v-card-actions>
        </v-card>  
    </div>
</template>

<script>
    export default {
        name: "JobApplicationForm"
        
    }
</script>

<style lang="scss" scoped>

</style>