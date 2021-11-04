<template>
    <div>
         <v-avatar
                :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
                size="32"
        ></v-avatar>
        <v-avatar
            class="hidden-sm-and-down"
            color="grey darken-1 shrink"
            size="65"
        ></v-avatar>

        <v-list-item link>
            <v-list-item-content>
                <v-list-item-title class="text-h7">
                    Placeholder for name{{firstName}} {{lastName}} 
                </v-list-item-title>
                    <v-list-item-subtitle>Placeholder for workting title{{workingTitle}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Placeholder for company name{{organizationName}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Placeholder for location{{location}}</v-list-item-subtitle>

                <v-spacer></v-spacer>
                <v-spacer></v-spacer>

                <v-list-item-title class="text-h7">
                    Contact 
                </v-list-item-title>
                    <v-list-item-subtitle>Email: {{email}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Phone: {{phoneNumber}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        name: "ProfileCard",
        props: {
            userId: Number,
            firstName: String,
            lastName: String,
            organizationName: String,
            location: String,
            workingTitle: String,
            email: String,
            phoneNumber: String
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