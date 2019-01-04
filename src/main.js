import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import navbar from './components/Navbar'




Vue.component('navbar', navbar)



Vue.config.productionTip = false


    new Vue({
      router,
      store,
      render: h => h(App),
      }).$mount('#app')

   
