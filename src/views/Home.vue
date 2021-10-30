<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
            <v-card
            class="mx-auto"
            max-width="50vw"
            height="30vh"
        >
            <v-card-text>
               v-for="[workingTitle, location, company] in ad"
              :key="post"
              ad
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">
                {{workingTitle}}
            </p>
            <p>{{location}}</p>
            <div class="text--primary">
                {{company}}
            </div>
            </v-card-text>
            <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
            >
                Learn More
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                height="800"
            >
                <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                    Origin
                </p>
                <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                <v-btn
                    text
                    color="teal accent-4"
                    @click="reveal = false"
                >
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-expand-transition>
        </v-card>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
        drawer: null,
        links: [
          ['mdi-inbox-arrow-down', 'Profile'],
          ['mdi-send', 'Search Jobs'],
          ['mdi-delete', 'Trash'],
          ['mdi-alert-octagon', 'Spam'],
      ],
        ad: [
          ['Web Developer', 'Edmonton', 'Awesome Company'],
          ['Web Designer', 'Edmonton', 'ABC'],
          ['Security Analyst', 'Calgary', 'Security World'],
        ],
        reveal: false,
    }),
  }
</script>



