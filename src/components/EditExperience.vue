<template>
    <div>
        <v-list-item-title class="text-h6 mb-5 mt-5">
                <b>Experience</b> 
            </v-list-item-title> 
            <v-text-field
                :disabled="!isEditing"
                v-model="title"
                color="Title"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="companyName"
                color="white"
                label="Company Name"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="workLocation"
                color="white"
                label="Work Location"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="description"
                color="white"
                label="Description"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                v-model="startDate"
                color="white"
                label="Start Date *"
            ></v-text-field>
                <v-text-field
                :disabled="!isEditing"
                v-model="endDate"
                color="white"
                label="End Date"
            ></v-text-field>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!isEditing"
                color="success"
                @click="saveEditExperience()"
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
    </div>
</template>

<script>
    export default {
        name: "EditExperience",
        props: {
            hasSaved: Boolean,
            isEditing: Boolean,
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