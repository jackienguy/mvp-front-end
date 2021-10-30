<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        width="30vw"
        app
    >
      <p>Discover new opportunities for you</p>
    </v-navigation-drawer>
    <signinNavigation v-if="!mobileView"/>
       
    <v-main class="grey lighten-3">
      <v-container>
          <v-col>
            <v-sheet
              id="registerForm"
              min-height="60vh"
              width="40vw"
              rounded="lg"
            >
            <v-toolbar>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                  <v-col
                      cols="12"
                      md="10"
                  >
                    <v-card-text>
                        <v-text-field
                            v-model="firstname"
                            :error-messages="nameErrors"
                            :counter="20"
                            label="First Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="lastname"
                            :error-messages="nameErrors"
                            :counter="20"
                            label="Last Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
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
                        <v-checkbox
                            v-model="checkbox"
                            :error-messages="checkboxErrors"
                            label="Job Seeker"
                            required
                            @change="$v.checkbox.$touch()"
                            @blur="$v.checkbox.$touch()"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="checkbox2"
                            :error-messages="checkboxErrors"
                            label="Recruiter"
                            required
                            @change="$v.checkbox.$touch()"
                            @blur="$v.checkbox.$touch()"
                        ></v-checkbox>

                        <v-btn class="mr-4" @click="submitSignup">Create Account</v-btn>
                        <v-btn id="cancelBtn" class="mr-4" @click="clear">Clear</v-btn>
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
    import signinNavigation from "../components/signinNavigation.vue";
  
    export default {
        name: "Register",
        components: {
            signinNavigation
        },
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            select: { required },
            checkbox: {
                checked (val) {
                return val
                },
            },
        },
        data() { 
            return {
                 drawer: null,
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phoneNumber: '',
                birthdate: '',
                profilePicture: '',
                loginToken: '',
                checkbox: false,
                checkbox2: false,
                mobileView: false,
                showNav: false
            }
        },
        computed: {
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('You must select one to continue!')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('First name must be at most 20 characters long')
                !this.$v.name.required && errors.push('First name is required.')
                return errors
            },
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
                        phoneNumber: this.phoneNumber,
                        birthdate: this.birthdate,
                        profilePicture: this.profilePicture
                    }
                }).then((response)=> {
                    console.log(response);
                    cookies.set('loginToken', response.data.loginToken);
                    this.$router.push("/home");
                }).catch((err)=>{
                    console.error(err);
                })
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = false
            },
        }
    }
</script>