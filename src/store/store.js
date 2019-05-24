import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: { app, todos },
})
