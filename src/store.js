import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    themeIsDark: false,
    todoItems: [{
      id: 0,
      title: "test_task",
      content: "Lorem Ipsum sit dolor ammet",
      checked: false
    }]
  },
  getters: {
    allTodos(state) {
      return state.todoItems
    },
    uncheckedTodos(state) {
      return state.todoItems.filter(item => !item.checked)
    },
    checkedTodos(state) {
      return state.todoItems.filter(item => item.checked)
    }
  },
  mutations: {
    SWITCH_THEME: (state) => state.themeIsDark = !state.themeIsDark,

    ADD_TODO_ITEM: (state, item) => state.todoItems.push(item),
    DELETE_TODO_ITEM: (state, itemIndex) => state.todoItems.splice(itemIndex, 1),
    CHECKOUT_TODO_ITEM: (state, itemIndex) => state.todoItems[itemIndex].checked = !state.todoItems[itemIndex].checked
  },
  actions: {
    deleteTodoItem: (context, item) => {
      context.commit('DELETE_TODO_ITEM', item)
    },
    addTodoItem: (context, item) => {
      context.commit('ADD_TODO_ITEM', item)
    },
    checkoutTodoItem: (context, item) => {
      context.commit('CHECKOUT_TODO_ITEM', item)
    }
  }
})
