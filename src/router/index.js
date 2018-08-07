import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import content from '@/page/content'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '主页',
      },     
    }, 
    {
      path: '/content',
      name: 'content',
      component: content,
      meta: {
        title: '测试',
      }, 
    } ,{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录',
      }
    }
  ],

})
