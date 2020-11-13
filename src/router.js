import Vue from 'vue'
import Router from 'vue-router'
import wode from './views/wode.vue'
import renli from './components/renli.vue'
import yuangon from './views/yuangon.vue'
import yuanzen from './views/yuanzen.vue'
import yuancha from './views/yuancha.vue'
import yuangai from './views/yuangai.vue'
import zhaopin from './views/zhaopin.vue'
import zhaozen from './views/zhaozen.vue'
import zhaokan from './views/zhaokan.vue'
import ruzhizen from './views/ruzhizen.vue'
import ruzhikan from './views/ruzhikan.vue'
import zhuanzhengzen from './views/zhuanzhengzen.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhuanzhengzen',
      component: zhuanzhengzen
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
    },
    {
      path: '/yuangai',
      name: 'yuangai',
      component: () => import('./views/yuangai.vue')
    },
    {
      path: '/zhaopin',
      name: 'zhaopin',
      component: () => import('./views/zhaopin.vue')
    },
    {
      path: '/zhaozen',
      name: 'zhaozen',
      component: () => import('./views/zhaozen.vue')
    },
    {
      path: '/zhaokan',
      name: 'zhaokan',
      component: () => import('./views/zhaokan.vue')
    },
    {
      path: '/ruzhizen',
      name: 'ruzhizen',
      component: () => import('./views/ruzhizen.vue')
    },
    {
      path: '/ruzhikan',
      name: 'ruzhikan',
      component: () => import('./views/ruzhikan.vue')
    },
    {
      path: '/zhuanzhengzen',
      name: 'zhuanzhengzen',
      component: () => import('./views/zhuanzhengzen.vue')
    }
  ]
})
