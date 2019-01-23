<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card :dark="themeIsDark" :light="!themeIsDark">
      <v-card-title primary-title>
        <v-checkbox class="mt-0 pt-0 shrink" 
                    @change="checkoutItem(item.id)"
                    color="success" 
                    :value="item.checked"
                    :inputValue="item.checked"
                    :hideDetails=true></v-checkbox>
        <h3 class="headline mb-0">{{ item.title }}</h3>
      </v-card-title>
      <v-card-text>{{ item.content }}</v-card-text>
      <v-card-actions>
        <v-btn @click="deleteItem(item.id)" 
                color="error"
                flat
                >delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState([
      'themeIsDark'
    ])
  },
  methods: {
    ...mapMutations([
      'DELETE_TODO_ITEM',
      'CHECKOUT_TODO_ITEM'
    ]),
    ...mapActions([
      'deleteTodoItem',
      'checkoutTodoItem'
    ]),
    deleteItem(id) {
      this.deleteTodoItem(id)
    },
    checkoutItem(id) {
      this.checkoutTodoItem(id)
    }
  }
}
</script>
