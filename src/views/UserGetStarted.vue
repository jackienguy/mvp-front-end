<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
            >
        </v-app-bar>

        <v-main class="grey lighten-3">  
            <v-sheet
            min-height="70vh"
            rounded="lg"
            >                       
                <!-- input form -->
                <UserGetStartedForm/>
            </v-sheet>
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