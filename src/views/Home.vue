<template>
  <div class="home">
    <v-container grid-list-xl fluid>
      <v-flex xs4>
        <v-select label="Show only..."></v-select>
      </v-flex>
      <v-layout row wrap>
        <TodoItem v-for="item in todoItems" 
                  :key="item.id"
                  :item="item" />
        <v-flex xs12 sm6 md4>
          <TodoItemForm />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TodoItem from '@/components/TodoItem'
import TodoItemForm from '@/components/TodoItemForm'

export default {
  components: {
    TodoItem,
    TodoItemForm
  },
  computed: {
    ...mapState([
      'themeIsDark',
      'todoItems'
    ])
  }
}
</script>
