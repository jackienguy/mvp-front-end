<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
            >
        </v-app-bar>

        <v-main class="teal lighten-3">                
            <!-- input form -->
            <UserGetStartedForm/>
        </v-main>
    </v-app>
</template>

<script>

import UserGetStartedForm from '../components/UserGetStartedForm.vue'

    export default {
        components: {
            UserGetStartedForm,
        }
    }
</script>