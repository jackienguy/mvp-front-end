<template>
    <div>
        <v-app-bar id="nav"
            app
            flat
            >
            <v-btn id="toggleBtn" @click="navDrawer = !navDrawer"
            class="mx-2 pa-9"
            fab
            color="teal"
            >
                <v-icon class= dark dense color="yellow" >
                    mdi-format-list-bulleted-square
                </v-icon>
            </v-btn>

            <v-tabs 
                centered
                class="ml-n9"
                color="yellow accent-4"
            >
                <v-tab class="navLinks"
                v-for="(link, i) in links"
                :key="i"
                :to="link.to"
                >
                {{ link.title }}
                </v-tab>
            </v-tabs>  

            <v-navigation-drawer
                v-model="navDrawer"
                absolute
                temporary
                height="100vh"
                color="teal lighten-3"
                >

                <v-list class="pt-8" dense>
                    <v-list-item color="yellow"
                    v-for="(link, i) in links"
                            :key="i"
                            :to="link.to"
                            >
                            {{ link.title }}
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>
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
                    {title:'Post Job', to: '/post-job'},  
                    {title:'Job Requisitions', to: '/job-requisition'},  
                    {title:'Messages', to: ''}, 
                    {title:'Interviews', to: ''},
                ],
               navDrawer: null,
            } 
        }
    }
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    #toggleBtn {
        margin: 60px 10px 20px;
        cursor: pointer;
    }

// for medium screen 
@media screen and (min-width: 990px) {
    #toggleBtn {
        display: none;
    }
}

@media screen and (max-width: 990px) {
    .navLinks {
        display: none
    }
}

</style>