import Vue from 'vue'
import Router from 'vue-router'

import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'


import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if route requires Auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    
    if(store.state.idtoken){
      // user signed in, proceed to route
      next()
    }else{
      // no user signed in redirect to login page
      next({name: 'Login'})
    }
  }else {
    next()
  }
})

export default router