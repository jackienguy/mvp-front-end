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
                <v-col
                    cols="12"
                    sm="12"
                >
                    <v-sheet
                    min-height="70vh"
                    rounded="lg"
                    >

                     <v-container>
                            <v-list-item link>
                            <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                <h3>Hi, User Name{{firstName}} {{lastName}}</h3>  
                            </v-list-item-title>
                            </v-list-item-content>
                           
                      

                            <v-responsive max-width="400">
                                <v-text-field
                                class="ma-8"
                                dense
                                flat
                                hide-details
                                rounded
                                solo-inverted
                                label="Search Job"
                                ></v-text-field>
                            </v-responsive>
                             </v-list-item>
                    </v-container>
                    <!--  -->
                        <v-container class="grey lighten-5">
                          <h3>Featured Jobs</h3>
                           <v-card
                                class="mx-auto"
                                max-width="50vw"
                                height="30vh"
                            >
                                <v-card-text>
                                  v-for="[workingTitle, location, company] in ad"
                                  :key="post"
                                  ad
                                <div>Word of the Day</div>
                                <p class="text-h4 text--primary">
                                    {{workingTitle}}
                                </p>
                                <p>{{location}}</p>
                                <div class="text--primary">
                                    {{company}}
                                </div>
                                </v-card-text>
                                <v-card-actions>
                                <v-btn
                                    text
                                    color="teal accent-4"
                                    @click="reveal = true"
                                >
                                    Learn More
                                </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                <v-card
                                    v-if="reveal"
                                    class="transition-fast-in-fast-out v-card--reveal"
                                    height="800"
                                >
                                    <v-card-text class="pb-0">
                                    <p class="text-h4 text--primary">
                                        Origin
                                    </p>
                                    <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                                    </v-card-text>
                                    <v-card-actions class="pt-0">
                                    <v-btn
                                        text
                                        color="teal accent-4"
                                        @click="reveal = false"
                                    >
                                        Close
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-expand-transition>
                            </v-card>
                        </v-container>

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
                    {title:'Dashboard', to: '/user-dashboard'}, 
                    {title:'Profile', to: '/user-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Borwse Jobs', to: '/jobs-board'}
                ],
                featureJobs: [
                  ['Web Developer', 'Edmonton', 'Awesome Company'],
                  ['Web Designer', 'Edmonton', 'ABC'],
                  ['Security Analyst', 'Calgary', 'Security World'],
                ],
                reveal: false,
            }
        },
        methods: {
            goToPostJob(){
                 this.$router.push("/post-job");
            }
        }
    }
</script>