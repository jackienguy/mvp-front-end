<template>
    <div>
        <v-card>
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
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hasSaved: false,
                isEditing: null,
                model: null,
            }
        }
    }
</script>

<style lang="postcss" scoped>

</style>