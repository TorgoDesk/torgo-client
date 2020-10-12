export const state = {
  connected: navigator.onLine
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  connected(state) {
    return state.connected
  }
}

export const mutations = {
  'SET_CONNECTED' (state, payload) {
    state.connected = payload
  }
}

export const actions = {
  setConnected ({commit}, payload) {
    commit('SET_CONNECTED', payload)
  }
}