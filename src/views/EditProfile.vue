<template>
  
    <v-app id="inspire">
      <!-- import user top nav component -->
      <UserTopNav/>

        <v-main class="grey lighten-3">
                <v-container>
                    <v-row>
                        <v-col class="mx-auto"  xs="12" lg="8">
                            <v-card
                            class="overflow-auto"
                            height="100vh"
                            rounded="lg"
                            >
                            <v-toolbar
                            flat
                            >
                            <v-toolbar-title class="font-weight-light">
                                Edit Profile
                            </v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <EditProfileInfo/>
                               
                            </v-card-text>
                            <v-btn
                                class="ma-12 pa-4"
                                outlined
                                rounded
                                small
                                color="cyan"
                                @click="cancelEdit()"
                            >
                            Cancel
                            </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
        </v-main>
    </v-app>
</template>

<script>
import UserTopNav from '../components/UserTopNav.vue';
import EditProfileInfo from '../components/EditProfileInfo.vue';

    export default {
        components: {
            UserTopNav,
            EditProfileInfo
        },
    }
</script>

<style lang="scss" scoped>

</style>