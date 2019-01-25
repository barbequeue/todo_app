<template>
  <div class="home">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3>
          <TodosFilter defaultFilter="nonchecked" />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <TodoItem v-for='item in uncheckedTodos'
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

import TodosFilter from '@/components/TodosFilter'
import TodoItem from '@/components/TodoItem'
import TodoItemForm from '@/components/TodoItemForm'

export default {
  components: {
    TodoItem,
    TodoItemForm,
    TodosFilter
  },
  computed: {
    ...mapState([
      'themeIsDark'
    ]),
    ...mapGetters([
      'uncheckedTodos'
    ])
  }
}
</script>
