const state = {
  lastID: 0,
  todos: []
}

const getters = {
  allTodos(state) {
    return state.todos
  },

  checkedTodos(state) {
    return state.todos.filter(todo => todo.checked)
  },

  uncheckedTodos(state) {
    return state.todos.filter(todo => !todo.checked)
  },

  todoIndex(state) {
    return function(id) {
      return state.todos.findIndex(todo => todo.id === id)
    }
  }
}

const mutations = {
  incrementId: (state) => state.lastID += 1,

  addTodo: (state, item) =>
    state.todos = state.todos.concat([item]),

  deleteTodo: (state, index) =>
    state.todos.splice(index, 1),

  checkoutTodo: (state, index) =>
    state.todos[index].checked = !state.todos[index].checked
}

const actions = {
  addTodo: (context, item) => {
    item.id = context.state.lastID
    context.commit('addTodo', item)
    context.commit('incrementId')
  },

  deleteTodo: (context, id) =>
    context.commit('deleteTodo', context.getters.todoIndex(id)),

  checkoutTodo: (context, id) =>
    context.commit('checkoutTodo', context.getters.todoIndex(id))
}

export default {
  state,
  getters,
  mutations,
  actions,
}
