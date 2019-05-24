<template>
  <div class="todo-item">
    <v-card>
      <v-card-title primary-title>
        <v-checkbox
          class="mt-0 pt-0 shrink" 
          @change="checkoutTodo(item.id)"
          color="info" 
          :value="item.checked"
          :inputValue="item.checked"
          :hideDetails=true 
        />
        <h3 class="headline mb-0">
          {{ item.title }}
        </h3>
      </v-card-title>
      <v-card-text class="todo-item__text">
        {{ item.content }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="deleteTodo(item.id)" 
          color="error"
          flat
        >
          delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'checkoutTodo'
    ]),
  }
}
</script>

<style scoped>
.todo-item__text {
  word-break: break-all;
}
</style>
