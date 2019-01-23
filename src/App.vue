<template>
  <v-app :dark="themeIsDark" :light="!themeIsDark">
    <v-toolbar app>
      <v-toolbar-title>todo_app</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>fas fa-sun</v-icon>
      <v-switch @change="this.SWITCH_THEME" class="shrink pt-0 ml-3 mr-2" color="white" :hideDetails=true></v-switch>
      <v-icon>fas fa-moon</v-icon>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'themeIsDark'
    ])
  },
  methods: {
    ...mapMutations([
      'SWITCH_THEME'
    ])
  }
}
</script>
