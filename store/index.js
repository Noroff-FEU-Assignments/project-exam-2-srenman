import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = {
  isLoading: false,
  user: null,
  accessToken: null,
}

export const actions = {
  setLoading({ commit }, status) {
    commit('setLoading', status)
  },
  // Auth calls
  async registerTenant({ commit }, data) {
    try {
      const authRes = await axios.post(
        'http://staging.minneapi.no/auth/register',
        {
          company: data.company,
          name: data.name,
          email: data.email,
          password: data.password,
        }
      )
      await commit('setTenant', authRes.config.data)
    } catch (error) {
      console.log(error)
    }
  },

  async login({ commit }, user) {
    const response = await axios.post(
      'http://staging.minneapi.no/auth/login',
      user
    )
    console.log(response)
    console.log(commit)
  },

  // Obituary calls
  async Obituaries({ commit }) {
    try {
      await axios.get('person').then((response) => {
        console.log(response)
        console.log(commit)
      })
    } catch (error) {
      console.log(error)
    }
  },
}
export const getters = {}
export const mutations = {
  setLoading(state, status) {
    state.isLoading = status
  },
  setTenant(state, tenant) {
    state.tenant = tenant
  },
  setToken(state, token) {
    state.accessToken = token
  },
}
