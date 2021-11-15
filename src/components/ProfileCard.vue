<template>
    <div>
        <v-flex xs12 md10>
            <v-sheet 
            rounded="lg"
            height="70vh"
            >
            <v-layout row wrap>
                <v-flex class="text-center">
                    <v-avatar
                        class="mt-10 mb-8"
                        color="yellow"
                        size="80"
                    >
                            <v-icon dark>
                                mdi-account-circle
                            </v-icon>
                    </v-avatar>

                    <v-btn
                    class="mb-6 pa-4"
                    width="10vw"
                    outlined
                    rounded
                    small
                    color="cyan"
                    @click="editUserInfo()"
                    >
                    Edit Profile
                    </v-btn>

                </v-flex>
            </v-layout>

            <v-divider></v-divider>
            
            <v-list-item link>
                <v-list-item-content class="text-center">
                    <v-list-item-title class="text-h7">
                    <b>{{firstName}} {{lastName}} </b> 
                    </v-list-item-title>
                        <v-list-item-subtitle>{{workingTitle}}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{organizationName}}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{location}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item link>
                <v-list-item-content class="text-center">
                    <v-list-item-title class="text-h7">
                        Contact 
                    </v-list-item-title>
                        <v-list-item-subtitle>Email: {{email}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Phone: {{phoneNumber}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
            <v-row class="justify-center">
                <v-btn
                class="ma-6 pa-4"
                width="10vw"
                outlined
                rounded
                small
                color="cyan"
                @click="logout()"
                >
                Log Out
                </v-btn>
            </v-row>
          </v-sheet>
        </v-flex>
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
                    url: "http://127.0.0.1:5000/api/signin",
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

<style lang="postcss" scoped>

</style>





