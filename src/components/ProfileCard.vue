<template>
    <div>
        <v-col class="mx-auto"  xs="12" lg="9">
            <v-sheet 
            rounded="lg"
            height="40vh"
            >
                <v-layout row wrap>
                    <v-flex>
                        <div align="center" >
                            <v-list-item-avatar
                                class="ml-4 mt-6"
                                color="yellow"
                                size="80"
                            >
                                    <v-icon dark>
                                        mdi-account-circle
                                    </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content> 
                                <v-list-item-title id="name" ><b>{{firstName}} {{lastName}} </b></v-list-item-title>
                                <v-list-item-subtitle>{{ workingTitle }}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{organizationName}}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{location}}</v-list-item-subtitle>
                            </v-list-item-content>
                    </div>

                    <v-list-item>
                        <v-list-item-content class="text-center">
                            <v-list-item-subtitle><b>Email:</b> {{email}}  <b>|</b>  <b>Phone:</b> {{phoneNumber}}</v-list-item-subtitle>
                            </v-list-item-content>
                    </v-list-item>
                
                    <div class="mt-2" align="center">
                        <v-btn
                        class="mr-5"
                        outlined
                        rounded
                        small
                        color="cyan"
                        @click="editUserInfo()"
                        >
                            Edit Profile
                        </v-btn>

                        <v-btn
                        outlined
                        rounded
                        small
                        color="cyan"
                        @click="logout()"
                        >
                        Log Out
                        </v-btn>
                    </div>

                    </v-flex>
                </v-layout> 
            </v-sheet>
        </v-col>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

    export default {
        name: "ProfileCard",
        props: {
            userId: Number,
            firstName: String,
            lastName: String,
            organizationName: String,
            location: String,
            workingTitle: String,
            email: String,
            phoneNumber: String
        },
        data() {
            return {
                hasSaved: false,
                isEditing: null,
                model: null,
            }
        },
        methods: {
            logout() {
                axios.request ({
                    url: "http://youropp.ml/api/signin",
                    method: "DELETE",
                    data: {
                        loginToken: cookies.get('loginToken')
                    }
                }).then((response)=>{
                    cookies.remove('loginToken');
                    console.log(response);
                    this.$router.push('/Signin')
                }).catch((err)=>{
                    console.error(err);
                })  
            },
            editUserInfo() {
                this.$router.push('/edit-profile')
             
            }
        }
    }
</script>

<style lang="scss" scoped>
    #name {
        font-size: 1.3em;
    }

@media screen and (min-width: 760px) {
    #name {
        font-size: 1.4em;
    }
}
</style>





