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
                        <v-sheet 
                        rounded="lg"
                        height="70vh"
                        >
                            <ProfileInfo/>
                            <ProfileCard/>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet
                        min-height="70vh"
                        rounded="lg"
                        >
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
                        <h3>Featured Jobs</h3>
                        <v-card
                            class="mx-auto"
                            max-width="50vw"
                            height="30vh"
                        >
                            <v-card-text>
                                <p class="text-h5 text--primary">
                                    Placeholder for working title
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
                        </v-sheet>   
                    </v-col> 
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue';
import ProfileCard from '../components/ProfileCard.vue';

    export default {
        components: {
            ProfileInfo,
            ProfileCard
        },
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