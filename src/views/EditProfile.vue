<template>
   <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
            >
        </v-app-bar>

        <v-main class="teal lighten-3">
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
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
        </v-main>
    </v-app>
</template>

<script>
import EditProfileInfo from '../components/EditProfileInfo.vue';

    export default {
        components: {
            EditProfileInfo
        },
    }
</script>

<style lang="scss" scoped>

</style>