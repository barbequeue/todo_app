<template>
  <div class="todo-list">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3
        v-for="item in items"
        :key="item.id"
      >
        <TodoItem  :item="item" />
      </v-flex>
      <v-flex xs12 sm6 md4 lg3
        v-show="!readOnly">
        <TodoForm />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

export default {
  props: {
    items: Array,
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TodoItem,
    TodoForm
  }
}
</script>
