<template>
    <div>
        <v-app-bar
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
        name: "RecruiterTopNav",
        props: {
            firstName: String,
            lastName: String
        },
        data(){ 
            return {
                links: [
                    {title:'Dashboard', to: '/recruiter-dashboard'},  
                    {title:'Messages', to: ''}, 
                    {title:'Interviews', to: ''}
                ],
            } 
        }
    }
</script>

<style lang="scss" scoped>

</style>