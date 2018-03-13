import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state, n) {
    state.count += n
  },
  reduce(state) {
    state.count--
  }
}

const getters = {
  count(state) {
    return state.count += 100
  }
}

const actions = {
  addAction(context) {
    setTimeout(() => {
      context.commit('add', 10)
    }, 3000)
    console.log('我比reduce提前执行')
  },
  reduceAction({commit}) {
    commit('reduce')
  }
}

const moduleA = {
  state, mutations, getters, actions
}

export default new Vuex.Store({
  modules: {a: moduleA}
})