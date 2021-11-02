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
                        <!-- Job post input form -->
                            <v-form 
                            class="pl-16 pt-8"
                            v-model="valid"
                            >
                                <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        md="6"
                                        >
                                            <h2>Job Information</h2>
                                            <p>Working Title</p>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="title"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Company Name</p>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="name"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Location</p>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="city, province/state"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <p>Full Time or Part Time</p>
                                            <v-select
                                                :items="status1"
                                                label="-- select --"
                                                solo
                                                required
                                            ></v-select>
                                            <p>Permanent or Temporary</p>
                                            <v-select
                                                :items="status2"
                                                label="-- select --"
                                                solo
                                                required
                                            ></v-select>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="10"
                                        >
                                            <p>About the Role</p>
                                            <v-textarea
                                            solo
                                            name="input-7-4"
                                            label="Brief description of the role"
                                            clearable
                                            required
                                            ></v-textarea>
                                            <p>Responsibilities (5-8 bullet points)</p>
                                            <v-textarea
                                            solo
                                            name="input-7-4"
                                            label="Brief summary"
                                            clearable
                                            required
                                            ></v-textarea>
                                            <p>Qualifications (i.e education, experience, skills, knowledge) </p>
                                            <v-textarea
                                            solo
                                            name="input-7-4"
                                            label="List qualifications"
                                            clearable
                                            required
                                            ></v-textarea>
                                        </v-col>
                                        
                                        <v-col
                                        cols="12"
                                        md="6"
                                        >
                                            <h2>Job Requisition Contact</h2>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="name"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="title"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="email"
                                                solo
                                                :rules="emailRules"
                                                label="E-mail"
                                                clearable
                                                required
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="message2"
                                                solo
                                                label="phone number"
                                                clearable
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                   
                                    <v-btn class="ma-3"> Submit </v-btn>
                                  
                                </v-container>
                            </v-form>
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
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'}, 
                    {title:'Profile', to: '/recruiter-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Interviews', to: '/interviews'}
                ],
                sideBarLinks: [
                    {title:'Post Job', to: '/#'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                    {title:'View Candidates', to: '/view-candidate'}
                ],
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                status1: ['Full Time', 'Part Time'],
                status2: ['Permanent', 'Temporary', 'Wage'],
            }
        },
    
    }
</script>