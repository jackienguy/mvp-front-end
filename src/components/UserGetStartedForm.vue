<template>
    <v-sheet
    min-height="70vh"
    rounded="lg"
    >
    <!-- Job post input form -->
        <v-form 
        class="pl-16 pt-8"
        v-model="valid"
        >
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <h2>Experience</h2>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <p>Company Name *</p>
                        <v-text-field
                            v-model="companyName"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>Location *</p>
                        <v-text-field
                            v-model="workLocation"
                            solo
                            :rules="requiredRule"
                            label="city, province/state"
                            clearable
                            required
                        ></v-text-field>
                        <p>Your working title with your company *</p>
                        <v-text-field
                            v-model="workingTitle"
                            :rules="requiredRule"
                            solo
                            label="title"
                            clearable
                            required
                        ></v-text-field>
                        <p>Start Date *</p>
                        <v-text-field
                            v-model="startDate"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>End Date *</p>
                        <v-text-field
                            v-model="endDate"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>Description *</p>
                        <v-text-field
                            v-model="description"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                    </v-col>

                <!-- Education info -->
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <h2>Education</h2>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <p>Certificate Name *</p>
                        <v-text-field
                            v-model="certificateName"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>major</p>
                        <v-text-field
                            v-model="major"
                            solo
                            label="title"
                            clearable
                        ></v-text-field>
                         <p>Location *</p>
                        <v-text-field
                            v-model="location"
                            solo
                            :rules="requiredRule"
                            label="city, province/state"
                            clearable
                            required
                        ></v-text-field>
                        <p>Institution Name *</p>
                        <v-text-field
                            v-model="institutionName"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>completionDate *</p>
                        <v-text-field
                            v-model="completionDate"
                            :rules="requiredRule"
                            solo
                            clearable
                            required
                        ></v-text-field>
                        <p>other *</p>
                        <v-text-field
                            v-model="other"
                            solo
                            clearable
                        ></v-text-field>
                    </v-col>

                <!--Skills info  -->
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <h2>Skills</h2>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <p>Skill Type </p>
                        <v-text-field
                            v-model="skillType"
                            solo
                            clearable
                        ></v-text-field>
                        <p>Proficiency Level</p>
                        <v-text-field
                            v-model="proficiencyLevel"
                            solo
                            label="basic, intermediate, advanced"
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>
                
                
            </v-container>
        </v-form>
    </v-sheet>

</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "UserGetStartedForm",
        data(){ 
            return {
                valid: false,
                requiredRule: [
                v => !!v || 'This field is required',
            ],
                userId: '',
                loginToken: '',
                // Info on experience 
                companyName: '',
                workLocation: '',
                startDate: '',
                endDate: '',
                workingTitle: '',
                phoneNumber: '',
                description:'',
                // Info on education
                certificateName: '',
                major:  '',
                location:  '',
                institutionName:  '',
                completionDate:  '',
                other:  '',
                // Info on skills
                skillType: '',
                proficiencyLevel: '',
            }
        },
        methods: {
            submitResumeInfo(){
                 axios.request({
                    url:"http://127.0.0.1:5000/api/resume",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                     },
                     data: {
                        loginToken: cookies.get ('loginToken'),
                        companynName: this.companyName,
                        workLocation: this.workLocation,
                        startDate: this.startDate,
                        endDate: this.endDate,
                        workingTitle: this.workingTitle,
                        description: this.description,
                        certificateName: this.certificateName,
                        major: this.major,
                        location:  this.location,
                        institutionName: this.institutionName,
                        completionDate: this.completionDate,
                        other: this.other,
                        skillType: this. skillType,
                        proficiencyLevel: this.proficiencyLevel,
                        
                     },
                 }).then((response)=>{
                    cookies.get('loginToken'),
                    console.log(response);
                    this.$router.push("/user-profile")
                 }).catch((err)=>{
                     console.error(err);
                 })
            }
        }
    }
</script>