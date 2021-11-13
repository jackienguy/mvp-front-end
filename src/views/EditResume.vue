<template>
  
    <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="grey lighten-3">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card
                            class="overflow-auto"
                            width="50vw"
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
                            
                                <EditEdu/>

                            </v-card-text>
                            <v-btn
                                class="ma-12 pa-4"
                                outlined
                                rounded
                                small
                                color="cyan"
                                @click="cancelEdit()"
                            >
                            Cancel Edit
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
import UserTopNav from '../components/UserTopNav.vue';

    export default {
        components: {
            EditEdu,
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