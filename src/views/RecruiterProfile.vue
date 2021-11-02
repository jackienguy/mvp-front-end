<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
        >
        <v-avatar
            :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
            size="32"
        ></v-avatar>

        <v-tabs
            centered
            class="ml-n9"
            color="grey darken-1"
        >
            <v-tab
            v-for="link in links"
            :key="link"
            >
            {{ link.title }}
            </v-tab>
        </v-tabs>

        <v-avatar
            class="hidden-sm-and-down"
            color="grey darken-1 shrink"
            size="32"
        ></v-avatar>
    </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet rounded="lg">
                            <v-list color="transparent">
                                <v-list-item
                                v-for="sideBarLink in sideBarLinks"
                                :key="sideBarLink"
                                link
                                >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ sideBarLink.title }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
                            <v-car >
                                <v-toolbar
                                rounded="lg"
                                >
                                <v-icon>mdi-account</v-icon>
                                <v-toolbar-title class="font-weight-light">
                                    Recruiter Profile
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
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
                            </v-car>

                        </v-sheet>
                    </v-col>      
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data(){ 
            return {
                // Top nav
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'}, 
                    {title:'Profile', to: '/recruiter-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Interviews', to: '/interviews'}
                ],
                // Side nav
                sideBarLinks: [
                    {title:'Post Job', to: '/#'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                    {title:'View Candidates', to: '/view-candidate'}
                ],
                // Profile card
                hasSaved: false,
                isEditing: null,
                model: null,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods: {
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }
    }
</script>