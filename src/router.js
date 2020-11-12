import Vue from 'vue'
import Router from 'vue-router'
import wode from './views/wode.vue'
import renli from './components/renli.vue'
import yuangon from './views/yuangon.vue'
import yuanzen from './views/yuanzen.vue'
import yuancha from './views/yuancha.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yuancha',
      component: yuancha
    },
    {
      path: '/yuangon',
      name: 'yuangon',
      component: () => import('./views/yuangon.vue')
    },
    {
      path: '/yuanzen',
      name: 'yuanzen',
      component: () => import('./views/yuanzen.vue')
    },
    {
      path: '/yuancha',
      name: 'yuancha',
      component: () => import('./views/yuancha.vue')
    }
  ]
})
