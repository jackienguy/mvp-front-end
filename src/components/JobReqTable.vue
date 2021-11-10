<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-card-title>
                {{jobTitle}}
            </v-card-title>

            <v-card-subtitle>
                Job ID: {{jobId}}
            </v-card-subtitle>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    <p>Number of Applicants: {{numApplicants}}</p>
                    <p>Closing Date: {{closingDate}}</p>
                    <p>Status: {{status}} </p>
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "JobReqTable",
        singleExpand: false,
        props: {
            jobTitle: String,
            recruiterId: Number,
            jobId: Number,
            numApplicants: Number,
            closingDate: String,
            status: String 
        },
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>