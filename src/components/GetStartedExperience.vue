<template>
    <div>
        <v-container>
            
        </v-container>
    </div>
</template>

<script>

    export default {
        name: "GetStartedExperience",
        props: {
            companyName: String,
            workLocation: String,
            startDate: String,
            endDate: String,
            workingTitle: String,
            phoneNumber: String,
            description: String,
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