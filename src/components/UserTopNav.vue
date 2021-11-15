<template>
    <div>
        <v-app-bar id=nav
        app
        color="teal lighten-3"
        flat
        >
        <v-tabs
            centered
            class="ml-n9"
            color="yellow"
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
                    {title:'Messages', to: ''}, 
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>