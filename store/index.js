export const state = {
  connected: navigator.onLine,
  userProfile: {
    address: '',
    alias: '',
    company_name: '',
    department: '',
    first_name: '',
    id: '',
    last_name: '',
    middle_name: '',
    phone: '',
    profile_pic_url: '',
    suffix: '',
    title: '',
    updated_at: '',
    user_id: '',
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  userProfile(state) {
    return state.userProfile
  },

  connected(state) {
    return state.connected
  }
}

export const mutations = {
  'SET_CONNECTED' (state, payload) {
    state.connected = payload
  },
  'SET_USER_PROFILE' (state, payload) {
    state.userProfile = payload
  }
}

export const actions = {
  setConnected ({commit}, payload) {
    commit('SET_CONNECTED', payload)
  },
  setUserProfile ({commit}, payload) {
    commit('SET_USER_PROFILE', payload)
  },
  async fetchUserProfile({commit}, id) {
    try {
      const response = await this.$axios.$get(
        "/profiles/" + id
      );
      commit('SET_USER_PROFILE', response)
      console.log('axios inside vuex');
    } catch (error) {
      console.error(error);
    } 
  }
}