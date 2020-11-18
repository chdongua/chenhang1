import Vue from 'vue'
import Router from 'vue-router'
import wode from './views/wode.vue'
import index_home from './components/index_home.vue'
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
import zhuanzhengkan from './views/zhuanzhengkan.vue'
import gangweikan from './views/gangweikan.vue'
import gangweizen from './views/gangweizen.vue'
import lizhizen from './views/lizhizen.vue'
import lizhikan from './views/lizhikan.vue'
import chuchai from './views/chuchai.vue'
import chukan from './views/chukan.vue'
import chuzen from './views/chuzen.vue'
import waichukan from './views/waichukan.vue'
import waichuzen from './views/waichuzen.vue'
import jiabankan from './views/jiabankan.vue'
import jiabanzen from './views/jiabanzen.vue'
import qingxiukan from './views/qingxiukan.vue'
import qingxiuzen from './views/qingxiuzen.vue'
import tiaoxiukan from './views/tiaoxiukan.vue'
import tiaoxiuzen from './views/tiaoxiuzen.vue'
import laodon from './views/laodon.vue'
import laodonzen from './views/laodonzen.vue'
import laodonkan from './views/laodonkan.vue'
import peixunzen from './views/peixunzen.vue'
import peixunkan from './views/peixunkan.vue'
import shengrkan from './views/shengrkan.vue'
import shengrzen from './views/shengrzen.vue'
import zhuanshuzen from './views/zhuanshuzen.vue'
import zhuanshukan from './views/zhuanshukan.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index_home',
      component: index_home
    },
    {
      path: '/index_home',
      name: 'index_home',
      component: () => import('./components/index_home.vue'),
      children:[
        {
          path: '/wode',
          name: 'wode',
          component: () => import('./views/wode.vue')
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
        },
        {
          path: '/zhuanzhengkan',
          name: 'zhuanzhengkan',
          component: () => import('./views/zhuanzhengkan.vue')
        },
        {
          path: '/gangweikan',
          name: 'gangweikan',
          component: () => import('./views/gangweikan.vue')
        },
        {
          path: '/gangweizen',
          name: 'gangweizen',
          component: () => import('./views/gangweizen.vue')
        },
        {
          path: '/lizhikan',
          name: 'lizhikan',
          component: () => import('./views/lizhikan.vue')
        },
        {
          path: '/lizhizen',
          name: 'lizhizen',
          component: () => import('./views/lizhizen.vue')
        },
        {
          path: '/chuchai',
          name: 'chuchai',
          component: () => import('./views/chuchai.vue')
        },
        {
          path: '/chukan',
          name: 'chukan',
          component: () => import('./views/chukan.vue')
        },
        {
          path: '/chuzen',
          name: 'chuzen',
          component: () => import('./views/chuzen.vue')
        },
        {
          path: '/waichukan',
          name: 'waichukan',
          component: () => import('./views/waichukan.vue')
        },
        {
          path: '/waichuzen',
          name: 'waichuzen',
          component: () => import('./views/waichuzen.vue')
        },
        {
          path: '/jiabanzen',
          name: 'jiabanzen',
          component: () => import('./views/jiabanzen.vue')
        },
        {
          path: '/jiabankan',
          name: 'jiabankan',
          component: () => import('./views/jiabankan.vue')
        },
        {
          path: '/qingxiukan',
          name: 'qingxiukan',
          component: () => import('./views/qingxiukan.vue')
        },
        {
          path: '/qingxiuzen',
          name: 'qingxiuzen',
          component: () => import('./views/qingxiuzen.vue')
        },
        {
          path: '/tiaoxiukan',
          name: 'tiaoxiukan',
          component: () => import('./views/tiaoxiukan.vue')
        },
        {
          path: '/tiaoxiuzen',
          name: 'tiaoxiuzen',
          component: () => import('./views/tiaoxiuzen.vue')
        },
        {
          path: '/laodon',
          name: 'laodon',
          component: () => import('./views/laodon.vue')
        },
        {
          path: '/laodonkan',
          name: 'laodonkan',
          component: () => import('./views/laodonkan.vue')
        },
        {
          path: '/laodonzen',
          name: 'laodonzen',
          component: () => import('./views/laodonzen.vue')
        },
        {
          path: '/peixunzen',
          name: 'peixunzen',
          component: () => import('./views/peixunzen.vue')
        },
        {
          path: '/peixunkan',
          name: 'peixunkan',
          component: () => import('./views/peixunkan.vue')
        },
        {
          path: '/shengrkan',
          name: 'shengrkan',
          component: () => import('./views/shengrkan.vue')
        },
        {
          path: '/shengrzen',
          name: 'shengrzen',
          component: () => import('./views/shengrzen.vue')
        },
        {
          path: '/zhuanshukan',
          name: 'zhuanshukan',
          component: () => import('./views/zhuanshukan.vue')
        },
        {
          path: '/zhuanshuzen',
          name: 'zhuanshuzen',
          component: () => import('./views/zhuanshuzen.vue')
        }
      ]
    }
  ]
})
