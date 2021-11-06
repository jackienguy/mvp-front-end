<template>
    <div>
        <div class="pa-5">
            <v-list-item-title class="text-h6 mb-5">
                <b>Personal Details</b> 
            </v-list-item-title>
            <v-list-item-title class="text-h7"> {{firstName}} {{lastName}} </v-list-item-title>
            <v-list-item-subtitle> {{email}}</v-list-item-subtitle>
            <v-list-item-subtitle> {{phoneNumber}}</v-list-item-subtitle>
        </div>
        <v-divider ></v-divider>
    </div>
</template>

<script>
    export default {
        name: "PersonalDetails",
        props: {
            userId: Number,
            firstName: String,
            lastName: String,
            email: String,
            phoneNumber: String
        },
    }
</script>

<style lang="postcss" scoped>

</style>