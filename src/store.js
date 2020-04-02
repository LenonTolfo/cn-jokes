import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    category: 'random',
    darkMode: localStorage.darkMode || false,
  },
  mutations: {
    setCategory(state, category) { state.category = category },
    changeDarkMode(state) {state.darkMode = !state.darkMode},
  }
});

export default store