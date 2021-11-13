<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        width="30vw"
        app
        color="teal lighten-3"
    >
      <p>Your new career starts here</p>
    </v-navigation-drawer>
       
    <v-main class="grey lighten-3">
      <v-container>
          <v-col>
            <v-sheet
              class="registerForm"
              min-height="60vh"
              width="40vw"
              rounded="lg"
            >
            <v-toolbar  color="teal lighten-3">
              <v-toolbar-title>Sign</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                  <v-col
                      cols="12"
                      md="10"
                  >
                    <v-card-text>
                        <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            label="Password"
                            type="password"
                            :counter="30"
                            required
                        ></v-text-field>
                    
                        <v-btn class="mr-4" @click="signin">Sign In</v-btn>

                        <v-divider class="mt-10"></v-divider>
                        <div class="mt-8">
                            <p>Don't have an account? 
                                <v-btn class="ml-3" @click="goToRegister()">Register Here</v-btn> 
                            </p>
                        </div>
                      </v-card-text>
                  </v-col>
              </v-row> 
            </v-card-text>
            </v-sheet>
          </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    import { validationMixin } from 'vuelidate';
    import { required, maxLength, email } from 'vuelidate/lib/validators';
    import cookies from 'vue-cookies';
    import axios from 'axios';
  
    export default {
        name: "Signin",
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            checkbox: {
                checked (val) {
                return val
                },
            },
        },

        data: () => ({ 
            drawer: null,
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            loginToken: '',

        }),
        computed: {
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },
        methods: {
            signin() {
                axios.request({
                    url: "http://127.0.0.1:5000/api/signin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        email: this.email,
                        password: this.password,
                    }
                }).then((response)=> {
                    console.log(response);
                    cookies.set('loginToken', response.data.loginToken);
                    cookies.set('userId', response.data.userId);
                    if (response.data.role == 'recruiter') {
                        this.$router.push("/recruiter-dashboard");
                    } else {
                        this.$router.push("/user-dashboard")
                    }
                }).catch((err)=>{
                    console.error(err);
                })
            },goToRegister() {
                this.$router.push('/')
            }
        }
    }
</script>