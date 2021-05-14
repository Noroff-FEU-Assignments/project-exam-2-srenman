import Vue from 'vue'

const getDefaultState = () => ({
  me: null,
  token: null,
})

export const state = getDefaultState

export const actions = {
  async login({ commit, user }) {
    try {
      const authRes = await this.$axios.$post('/auth/login', {
        email: 'sandra@iotek.no',
        password: 'password',
      })
      commit('setToken', authRes.access_token)
      this.$router.push('/admin')
      return { auth: true }
    } catch (error) {
      console.log(error)
      return {
        auth: false,
        error: error.response?.data.error,
        errors: error.response?.data?.errors,
      }
    }
  },
  logout({ commit, dispatch }) {
    this.$axios.$post('/auth/logout').catch(() => {})
    this.$axios.setToken(null)
    dispatch('clearState', null, { root: true })
    commit('clearState')
  },
}

export const mutations = {
  setMe(state, me) {
    Vue.set(state, 'me', me)
  },
  setCompany(state, company) {
    state.company = company
  },
  setToken(state, token) {
    state.token = token
    this.$axios.setToken(token, 'Bearer')
    localStorage.setItem('authToken', token)
  },
  clearState(state) {
    Object.assign(state, getDefaultState())
    localStorage.clear()
    this.$router.replace('/admin/auth/login')
  },
}
