b<template>
    <div>
      <b-card>
        <b-card-title>
          {{firstName}} {{lastName}}
        </b-card-title>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <v-btn
        outlined
        rounded
        small
        color="cyan"
        @click="isExpanded = true"
        >
        Resume
        </v-btn>
      </b-card>
      <div v-if="isExpanded">
        <ResumeInfo/>
      </div>
    </div>
           
</template>

<script>
import ResumeInfo from './ResumeInfo.vue'
  export default {
    name: "CandidatesTable",
    components: {
      ResumeInfo,
    },
    props: {
        jobId: Number,
        firstName: String,
        lastName: String,
        jobTitle: String
    },
    data(){
      return {
        isExpanded: null
      }
    }
  }
</script>



