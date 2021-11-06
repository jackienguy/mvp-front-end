<template>
    <div>
        <div v-if="isEditing">
            <v-text-field
                :disabled="!isEditing"
                v-model="certificateName"
                color="white"
                label="Educational credential *"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="major"
                color="white"
                label="major"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="location"
                color="white"
                label="City, State/Province *"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="institutionName"
                color="white"
                label="Institution Name *"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="completionDate"
                color="white"
                label="Completion Date *"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="other"
                color="white"
                label="Other credentials"
            ></v-text-field>
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Education</b>        
                <v-btn
                class="ml-4"
                fab
                small
                @click="isEditing =!isEditing"
                >
                    <v-icon v-if="isEditing">
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> Bachelors of Commerce{{certificateName}} at Fake University{{institutionName}}, Edmonton, AB{{location}} </v-list-item-title>
            <v-list-item-subtitle>Jan 2020 {{completionDate}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
  export default {
    name: "EducationSection",
    props: {
        hasSaved: Boolean,
        isEditing: Boolean,
        model: Boolean,
    }
  }

</script>

<style lang="scss" scoped>

</style>