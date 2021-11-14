<template>
  <v-app id="inspire">

      <NavDrawer/>

    <v-main class="grey lighten-3">
      <v-container>
          <v-col xs12>
            <v-sheet
              id="registerForm"
              min-height="60vh"
              rounded="lg"
            >
            <v-toolbar color="teal lighten-3">
              <v-toolbar-title id="registerTitle">Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                  <v-col
                      cols="12"
                      md="10"
                  >
                    <v-card-text>
                        <v-text-field
                            v-model="firstName"
                            :counter="20"
                            label="First Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="lastName"
                            :counter="20"
                            label="Last Name"
                            required
                        ></v-text-field>
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
                        <p>I am a: *</p>
                         <v-text-field
                            v-model="role"
                            label="enter job seeker or recruiter"
                            required
                        ></v-text-field>

                        <v-btn class="mr-4"
                        @click="submitSignup"
                        outlined
                        rounded
                        small
                        color="cyan"
                        >
                            Create Account
                        </v-btn>
                        <v-btn 
                        id="cancelBtn" 
                        class="mr-4" 
                        @click="clear"
                         outlined
                        rounded
                        small
                        color="cyan"
                        >
                            Clear
                        </v-btn>

                        <v-divider class="mt-10"></v-divider>
                        <div class="mt-8">
                            <p>Already have an account? 
                                <v-btn 
                                class="ml-3" 
                                @click="goToSignin()"
                                outlined
                                rounded
                                small
                                color="cyan"
                                >
                                    Go to Signin
                                </v-btn> 
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
    import NavDrawer from '../components/NavDrawer.vue'
  
    export default {
        name: "Register",
        components: {
            NavDrawer,
        },
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            select: { required },
        },
        data() { 
            return {
              
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                loginToken: '',
                role: '',
                mobileView: false,
                showNav: false,
                roles: ['job seeker', 'recruiter']
            }
        },
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
            submitSignup() {
                axios.request({
                    url: "http://127.0.0.1:5000/api/user",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                        role: this.role
                    }
                }).then((response)=> {
                    console.log(response);
                    cookies.set('loginToken', response.data.loginToken);
                    cookies.set('userId', response.data.userId);
                    if (response.data.role == 'recruiter') {
                        this.$router.push("/get-started");
                    } else {
                        this.$router.push("/user-get-started")
                    }
                }).catch((err)=>{
                    console.error(err);
                })
            },
            clear () {
                this.$v.$reset()
                this.firstName = ''
                this.lastName = ''
                this.email = ''
                this.password = ''
                this.role = ''
            },
            goToSignin() {
                this.$router.push('/signin')
            }
        }
    }
</script>

<style lang="scss">
       * {
        padding: 0;
        margin: 0;
    }
    #registerTitle {
        color: yellow;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1.8em;
    }
</style>