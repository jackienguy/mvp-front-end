<template>
    <div>
         <v-app-bar
        app
        color="white"
        flat
        >
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
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "UserTopNav",
        data(){ 
            return {
               links: [
                    {title:'Dashboard', to: '/user-dashboard'}, 
                    {title:'Profile', to: '/user-profile'}, 
                    {title:'Messages', to: '/recruiter-messages'}, 
                    {title:'Borwse Jobs', to: '/jobs-board'}
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>