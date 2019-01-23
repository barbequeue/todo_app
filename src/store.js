import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    themeIsDark: false,
    lastID: 0,
    todoItems: []
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
    },
    todoIndex: (state) => (id) => state.todoItems.findIndex(item => item.id === id)
  },
  mutations: {
    SWITCH_THEME: (state) => state.themeIsDark = !state.themeIsDark,

    INCREMENT_ID: (state) => state.lastID += 1,

    ADD_TODO_ITEM: (state, item) => state.todoItems = state.todoItems.concat([item]),
    DELETE_TODO_ITEM: (state, itemIndex) => state.todoItems.splice(itemIndex, 1),
    CHECKOUT_TODO_ITEM: (state, itemIndex) => state.todoItems[itemIndex].checked = !state.todoItems[itemIndex].checked
  },
  actions: {
    deleteTodoItem: (context, item) => {
      context.commit('DELETE_TODO_ITEM', context.getters.todoIndex(item))
    },
    addTodoItem: (context, item) => {
      item.id = context.state.lastID
      context.commit('ADD_TODO_ITEM', item)
      context.commit('INCREMENT_ID')
    },
    checkoutTodoItem: (context, item) => {
      context.commit('CHECKOUT_TODO_ITEM', context.getters.todoIndex(item))
    }
  }
})
