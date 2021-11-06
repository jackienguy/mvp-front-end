<template>
    <div>
            <div v-if="isEditing">
            <v-text-field
                :disabled="!isEditing"
                v-model="workingTitle"
                color="white"
                label="Working Title"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="companyName"
                color="white"
                label="Company Name"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="location"
                color="white"
                label="City, State/Province"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="startDate"
                color="white"
                label="Start Date"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="endDate"
                color="white"
                label="End Date"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="description"
                color="white"
                label="Description"
            ></v-text-field>
        </div>
        <div v-else class="pa-5">
            <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Expereince</b>        
                <v-btn
                class="ml-4"
                fab
                small
                @click="isEditing = !isEditing"
                >
                    <v-icon v-if="isEditing">
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-h7"> HRBP{{workintTitle}} at Company123{{companyName}}, Edmonton, AB{{location}} </v-list-item-title>
            <v-list-item-subtitle>Jan 2020 {{startDate}} - Now{{endDate}} </v-list-item-subtitle>
            <v-list-item-subtitle>Description {{description}} </v-list-item-subtitle>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ExperienceSection",
    props: {
        hasSaved: Boolean
    },
    data () {
      return {
        isEditing: null,
        model: null,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>