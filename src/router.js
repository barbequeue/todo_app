import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CheckedTodos from './views/CheckedTodos.vue'
import UncheckedTodos from './views/UncheckedTodos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/checked',
    name: 'checked',
    component: CheckedTodos
  },{
    path: '/non-checked',
    name: 'nonchecked',
    component: UncheckedTodos
  }]
})
