<template>
  <div class="home">
    <v-container grid-list-md fluid>
      <v-flex xs12 sm6 md4 lg3 mb-5>
        <v-select
          v-model="filter"
          label="Show..."
          :items="filters"
        />
      </v-flex>
      <TodoList
        :items="getItems(this.filter)"
      />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TodoList from '@/components/TodoList'

export default {
  components: {
    TodoList
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'checkedTodos',
      'uncheckedTodos'
    ]),
  },
  data() {
    return {
      filter: 'allTodos',
      filters: [{
        text: 'all',
        value: 'allTodos'
      }, {
        text: 'checked',
        value: 'checkedTodos'
      }, {
        text: 'unchecked',
        value: 'uncheckedTodos'
      }]
    }
  },
  methods: {
    getItems(filter = 'allTodos') {
      return this.$store.getters[filter];
    }
  },
}
</script>
