import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


// Create a new store instance.
const store = createStore({
  state () {
    return {
        loggedIn : false
        }
  },
  getters: {
    getLoggedIn(state){
      return state.loggedIn
    }

  },
  mutations: {
    setLoggedIn(state,status){
      state.loggedIn=status;
    }
  },
  actions: {
    setLoggedIn({commit},status){
      commit('setLoggedIn',status);
    }
  },
  plugins: [createPersistedState()],
})

export default store
