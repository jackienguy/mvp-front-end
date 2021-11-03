<template>
    <div>
         <v-container>
            <v-list-item link>
            <v-list-item-content>
            <v-list-item-title class="text-h6">
                <h3>Hi, Jane Doe{{firstName}} {{lastName}}</h3>  
            </v-list-item-title>
            <v-list-item-subtitle>Recruiter{{workingTitle}}</v-list-item-subtitle>
            <v-list-item-subtitle>Company 123{{organizationName}}</v-list-item-subtitle>
            <v-list-item-subtitle>Company 123{{location}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "recruiterProfileBody",
        props: {
            userId: Number,
            email: String,
            firstName: String,
            lastName: String,
            organizationName: String,
            location: String,
            workingTitle: String,
            companyWebsite: String
        },
        data() {
            return {
                hasSaved: false,
                isEditing: null,
                model: null,
            }
        },
        methods: {
            customFilter (item, queryText) {
                const textOne = item.name.toLowerCase()
                const textTwo = item.abbr.toLowerCase()
                const searchText = queryText.toLowerCase()

                return textOne.indexOf(searchText) > -1 ||
                textTwo.indexOf(searchText) > -1
            },
            save () {
                this.isEditing = !this.isEditing
                this.hasSaved = true
            }
        },
    }
</script>

<style lang="postcss" scoped>

</style>







  <!-- <v-card>
            <v-toolbar
            rounded="lg"
            >
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title class="font-weight-light">
                    Recruiter Profile
                </v-toolbar-title>
                <v-spacer   v-spacer></v-spacer>
                <v-btn
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
            </v-toolbar>
            <v-card-text>
                <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="Name"
                ></v-text-field>
                <v-autocomplete
                    :disabled="!isEditing"
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="State"
                ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!isEditing"
                    color="success"
                    @click="save"
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
        </v-card> -->