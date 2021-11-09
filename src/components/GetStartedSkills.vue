<template>
    <div>
        <v-container>
            <v-row>
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
    </div>
</template>

<script>

    export default {
        name: "GetStartedExperience",
        props: {
            skillType: String,
            proficiencyLevel: String
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