<template>
    <div>
        <v-form 
        class="pl-16 pt-8"
        v-model="valid"
        >
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <h2>Job Information</h2>
                        <p>Working Title *</p>
                        <v-text-field
                            v-model="jobTitle"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>Company Name *</p>
                        <v-text-field
                            v-model="orgName"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>Location *</p>
                        <v-text-field
                            v-model="jobLocation"
                            solo
                            label="city, province/state"
                            clearable
                            required
                        ></v-text-field>
                        <p>Full Time or Part Time *</p>
                        <v-text-field
                            v-model="ftStatus"
                            solo
                            label="full time or part time"
                            clearable
                            required
                        ></v-text-field>
                        <p>Permanent or Temporary *</p>
                       <v-text-field
                            v-model="permStatus"
                            solo
                            label="permanent or temporary"
                            clearable
                            required
                        ></v-text-field>
                        <p>Duration for Temporary Positions (i.e. up to 6 months)</p>
                        <v-text-field
                            v-model="duration"
                            solo
                            label="duration"
                            clearable
                            required
                        ></v-text-field>
                        <p>Salary Range</p>
                        <v-text-field
                            v-model="salaryRange"
                            solo
                            label="i.e $40,000 - $50,000 annually"
                            clearable
                            required
                        ></v-text-field>
                        <p>Closing Date *</p>
                        <v-text-field
                            v-model="closingDate"
                            solo
                            label="date"
                            clearable
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="10"
                    >
                        <p>About the Role *</p>
                        <v-textarea
                        v-model="about"
                        solo
                        name="input-7-4"
                        label="Brief description of the role"
                        clearable
                        required
                        ></v-textarea>
                        <p>Responsibilities (5-8 bullet points) *</p>
                        <v-textarea
                        v-model="responsibilities"
                        solo
                        name="input-7-4"
                        label="Brief summary"
                        clearable
                        required
                        ></v-textarea>
                        <p>Qualifications (i.e education, experience, skills, knowledge) *</p>
                        <v-textarea
                        v-model="qualifications"
                        solo
                        name="input-7-4"
                        label="List qualifications"
                        clearable
                        required
                        ></v-textarea>
                    </v-col>
                    
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <h2>Job Requisition Contact</h2>
                        <v-text-field
                            v-model="recruiterName"
                            solo
                            label="name"
                            clearable
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="recruiterTitle"
                            solo
                            label="title"
                            clearable
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="recruiterEmail"
                            solo
                            :rules="emailRules"
                            label="E-mail"
                            clearable
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="recruiterPhoneNumber"
                            solo
                            label="phone number"
                            clearable
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                
                <v-btn @click="submitJobPost" class="ma-3"> Submit </v-btn>
                
            </v-container>
        </v-form>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

    export default {
        data(){ 
            return {
                jobId: '',
                recruiterId: '',
                orgName: '',
                jobTitle:'',
                jobLocation: '',
                ftStatus: '',
                permStatus: '',
                duration: '',
                salaryRange: '',
                about: '',
                responsibilities: '',
                qualifications: '',
                closingDate: '',
                recruiterName: '',
                recruiterEmail: '',
                recruiterPhoneNumber: '',
                recruiterTitle: '',
                valid: false,
                requiredRules: [
                    v => !!v || 'This field is required',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                status1: ['Full Time', 'Part Time'],
                status2: ['Permanent', 'Temporary'],
            }
        },
        methods: {
            submitJobPost() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get('loginToken'),
                        recruiterId: cookies.get('userId'),
                        orgName: this.orgName,
                        jobTitle:this.jobTitle,
                        jobLocation: this.jobLocation,
                        ftStatus: this.ftStatus,
                        permStatus: this.permStatus,
                        duration: this.duration,
                        salaryRange: this.salaryRange,
                        about: this.about,
                        responsibilities: this.responsibilities,
                        qualifications: this.qualifications,
                        closingDate: this.closingDate,
                        recruiterName: this.recruiterName,
                        recruiterEmail: this.recruiterEmail,
                        recruiterPhoneNumber: this.recruiterPhoneNumber,
                        recruiterTitle: this.recruiterTitle,
                    }
                }).then((response)=>{
                    console.log(response);
                    this.$router.push('/job-posting');
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>