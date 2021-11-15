<template>
    <div>
        <v-col xs="12">
            <v-sheet 
            rounded="lg"
            height="30vh"
            >
                <v-layout row wrap>
                    <v-flex>
                        <v-list-item class="px-2">
                            <v-list-item-avatar
                                class="mt-10 mb-8 ml-10"
                                color="yellow"
                                size="80"
                            >
                                    <v-icon dark>
                                        mdi-account-circle
                                    </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content> 
                                <v-list-item-title ><b>{{firstName}} {{lastName}} </b></v-list-item-title>
                                <v-list-item-subtitle>{{ workingTitle }}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{organizationName}}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{location}}</v-list-item-subtitle>
                            </v-list-item-content>
                    </v-list-item>

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





