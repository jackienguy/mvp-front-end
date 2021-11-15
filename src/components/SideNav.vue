<template>
    <v-layout id="sideNav">
        <v-col xs="12" sm="8" md="5" lg="3" class="text-center">
            <v-sheet rounded="lg">
                <v-list class="link" color="transparent">
                    <v-list-item
                    v-for="(sideBarLink, i) in sideBarLinks"
                    :key="i"
                    :to="sideBarLink.to"
                    link
                    >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ sideBarLink.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-sheet>
        </v-col>
    </v-layout>
</template>

<script>
    export default {
        name: "SideNav",
        data() {
            return{
                sideBarLinks: [
                    {title:'Post Job', to: '/post-job'}, 
                    {title:'View Job Requisitions', to: '/job-requisition'}, 
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

@media screen and (min-width: 570px) {
    #sideNav {
        justify-content: center;
    }
}

@media screen and (min-width: 960px) {
    #sideNav {
        justify-content: left;
    }
}
   
</style>