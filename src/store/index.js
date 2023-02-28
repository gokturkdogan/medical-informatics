import Vue from 'vue'
import Vuex from 'vuex'
import health from './modules/health'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    health,
  }
})