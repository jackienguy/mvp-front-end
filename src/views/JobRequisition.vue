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
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
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
                                v-for="(sideBarLink, i) in sideBarLinks"
                                :key="i"
                                :to="sideBarLink.to"
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
                            <!-- Input job requisition board -->
                            <v-data-table
                                :headers="headers"
                                :items-per-page="5"
                                class="elevation-1"
                            ></v-data-table>
                                                        
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
                    {title:'Post Job', to: '/post-job'}, 
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
                // for job requisition table
                headers: [
                    {
                        text: 'Job Title',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Job ID', value: 'Job ID' },
                    { text: 'Number of Applicants', value: 'number of applicants' },
                    { text: 'Closing Date', value: 'date' },
                    { text: 'Status', value: 'status' },
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