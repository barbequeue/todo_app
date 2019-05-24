const state = {
  isDarkTheme: false
}

const getters = {
  isDarkTheme(state) {
    return state.isDarkTheme;
  }
}

const mutations = {
  switchTheme(state) {
    state.isDarkTheme = !state.isDarkTheme;
  }
}

const actions = {
  switchTheme(context) {
    context.commit('switchTheme');
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
