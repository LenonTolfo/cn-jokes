import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    category: 'random',
  },
  mutations: {
    setCategory(state, category) {
      state.category = category
    }
  }
});

export default store