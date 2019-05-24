<template>
  <v-app :dark="isDarkTheme">
    <v-toolbar app>
      <v-toolbar-title>todo_app</v-toolbar-title>
      <v-spacer />
      <v-icon>fas fa-sun</v-icon>
      <v-switch
        @change="this.switchTheme"
        color="white" 
        :hideDetails=true
        class="shrink pt-0 ml-2"
      />
      <v-icon>fas fa-moon</v-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isDarkTheme'
    ]),
  },
  methods: {
    ...mapActions([
      'switchTheme'
    ])
  },
}
</script>
