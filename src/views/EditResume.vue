<template>
    <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="grey lighten-3">
                <v-container>
                    <v-row>
                        <v-col xs12>
                            <v-card
                            class="overflow-auto"
                            height="100vh"
                            rounded="lg"
                            >
                            <v-toolbar
                            flat
                            color="yellow lighten-4"
                            >
                            <v-toolbar-title class="font-weight-light">
                                Edit Resume
                            </v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <EditExperience/>
                                <v-divider></v-divider>

                                <EditEdu/>
                                <v-divider></v-divider>

                                <EditSkills/>

                            </v-card-text>
                            <v-btn
                                class="ma-12 pa-4"
                                outlined
                                rounded
                                small
                                color="cyan"
                                @click="cancelEdit()"
                            >
                            Return to Profile
                            </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
        </v-main>
    </v-app>
</template>

<script>
import EditEdu from '../components/EditEdu.vue';
import EditExperience from '../components/EditExperience.vue';
import EditSkills from '../components/EditSkills.vue';
import UserTopNav from '../components/UserTopNav.vue';

    export default {
        components: {
            EditEdu,
            EditExperience,
            EditSkills,
            UserTopNav
        },
        methods: {
            cancelEdit() {
                this.$router.push('/user-profile')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>