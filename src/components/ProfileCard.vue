<template>
    <div>
        <v-row justify="center">
            <v-avatar
                class="mt-10 ml-10 mr-10 mb-5"
                color="indigo"
                size="70"
            >
                    <v-icon dark>
                        mdi-account-circle
                    </v-icon>
            </v-avatar>

             <v-btn
            class="mb-6 pa-4"
            outlined
            rounded
            small
            color="cyan"
            @click="isEditing = !isEditing"
            >
            Edit Profile
                <v-icon v-if="isEditing" dark>
                mdi-close
                </v-icon>
                <v-icon v-else>
                mdi-pencil
                </v-icon>
            </v-btn>
        </v-row>

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
            outlined
            rounded
            small
            color="cyan"
            @click="logout()"
            >
            Log Out
            </v-btn>
        </v-row>
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
            save () {
                this.isEditing = !this.isEditing
                this.hasSaved = true
            },
            logout() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/signin",
                    method: "DELETE",
                    data: {
                        loginToken: cookies.get('loginToken')
                    }
                }).then((response)=>{
                    cookies.remove('loginToken')
                    console.log(response);
                    this.$route.push('/')
                }).catch((err)=>{
                    console.error(err);
                })
                
                
            }
        },
    }
</script>

<style lang="postcss" scoped>

</style>







  <!-- <v-card>
            <v-toolbar
            rounded="lg"
            >
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title class="font-weight-light">
                    Recruiter Profile
                </v-toolbar-title>
                <v-spacer   v-spacer></v-spacer>
                <v-btn
                    fab
                    small
                    @click="isEditing = !isEditing"
                >
                    <v-icon v-if="isEditing">
                    mdi-close
                    </v-icon>
                    <v-icon v-else>
                    mdi-pencil
                    </v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="Name"
                ></v-text-field>
                <v-autocomplete
                    :disabled="!isEditing"
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="State"
                ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!isEditing"
                    color="success"
                    @click="save"
                >
                    Save
                </v-btn>
            </v-card-actions>
            <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left
            >
            Your profile has been updated
            </v-snackbar>
        </v-card> -->