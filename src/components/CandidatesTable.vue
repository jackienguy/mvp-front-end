<template>
  <v-container>
        <v-row>
            <v-col
                v-for="n in 24"
                :key="n"
                cols="4"
            >
                <v-card
                class="mx-auto"
                max-width="344"
                >
                    <v-card-text
                    >
                        <p class="text-h4 text--primary">
                            {{ jobTitle }}
                        </p>
                        <p>{{ jobId }}</p>
                    </v-card-text>
                    <v-card-actions>
                   <v-btn
                        class="mb-6 pa-4"
                        outlined
                        rounded
                        small
                        color="cyan"
                        @click="reveal = true"
                    >
                        View Candidates
                    </v-btn>
                    </v-card-actions>
                </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

    export default {
        name: "CandidatesTable.vue",
        data () {
            return {
                reqCards: [
                    {jobId: this.jobId, jobTitle: this.jobTitle}
                ]
                
            }
        },
        mounted() {
            this.getJobsInfo()
        },
        methods: {
            getJobsInfo() {
                axios.request ({
                    url: "http://127.0.0.1:5000/api/jobs",
                    methods: "GET",
                    params: {
                        recruiterId: cookies.get("userId")
                    }
                }).then((response)=>{
                    console.log(response);
                    this.jobId = response.data.jobId;
                    this.jobTitle = response.data.jobTitle
                }).catch((err)=>{
                    console.error(err);
                })
            }
        }
  }
</script>


<style lang="scss" scoped>

</style>




