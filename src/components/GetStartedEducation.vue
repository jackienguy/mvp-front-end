<template>
    <div>
        <v-container>
            <v-row>
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
            </v-row>
        </v-container>
    </div>
</template>

<script>

    export default {
        name: "GetStartedExperience",
        props: {
            certificateName: String,
            major: String,
            location: String,
            institutionName: String,
            completionDate: String,
            other: String,

        },
        data() { 
            return {
                requiredRule: [
                v => !!v || 'This field is required',
                ]
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>