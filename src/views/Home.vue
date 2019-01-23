<template>
  <div class="home">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3>
          <v-select label="Show..."
                    v-model="selectedFilter"
                    :items="filters"
                    itemText="name"
                    itemValue="filterName"></v-select>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <TodoItem v-for='item in allTodos'
                  :key="item.id"
                  :item="item" />
        <v-flex xs12 sm6 md4 lg3>
          <TodoItemForm />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import TodoItem from '@/components/TodoItem'
import TodoItemForm from '@/components/TodoItemForm'

export default {
  data() {
    return {
      selectedFilter: "allTodos",
      filters: [{
        name: 'all',
        filterName: 'allTodos'
      }, {
        name: 'checked',
        filterName: 'checkedTodos'
      }, {
        name: 'non-checked',
        filterName: 'uncheckedTodos'
      }]
    }
  },
  components: {
    TodoItem,
    TodoItemForm
  },
  computed: {
    ...mapState([
      'themeIsDark'
    ]),
    ...mapGetters([
      'allTodos',
      'uncheckedTodos',
      'checkedTodos'
    ])
  }
}
</script>
