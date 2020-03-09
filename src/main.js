import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios, Vuex)

const store = new Vuex.Store({
  state: {
    category: 'random',
  },
  mutations: {
    newCategory(state, category) {
      state.category = category
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
