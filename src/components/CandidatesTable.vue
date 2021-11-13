<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="100vw"
  >
    <v-card-title class="black--text">
      {{ jobTitle }} Job ID: {{ jobId }}

      <v-spacer></v-spacer>
   </v-card-title>
      <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="580"
        item-height="64"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item">
            <v-list-item-action>
              <v-btn
                fab
                small
                depressed
                color="primary"
              >
                {{ item }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{firstName}} {{lastName}} 
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn  @click="overlay = !overlay">
                    <v-icon small>
                    mdi-open-in-new
                    </v-icon>
               </v-btn>
                <v-overlay
                    :z-index="zIndex"
                    :value="overlay"
                    >   
                        <v-card
                    class="mx-auto pa-8 mb-5 overflow-auto"
                    max-width="40vw"
                    height="60vh"
                    color="white"
                    >
                        <JobsInfo/>
                    </v-card>
            
                        <v-btn
                            class="white--text"
                            color="teal"
                            @click="overlay = false"
                        >
                            Close
                        </v-btn>
                    </v-overlay>
              
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
   
       </v-card>
  </div>
</template>

<script>
  export default {
    name: "CandidatesTable",
    props: {
        jobId: Number,
        firstName: String,
        lastName: String,
        jobTitle: String
    },
    data: () => ({
        benched: 0,
        overlay: false,
        zIndex: 5,
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 2
      }
    }
  }
</script>
