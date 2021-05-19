import Vue from 'vue'

const getDefaultState = () => ({
  company: null,
  token: null,
})

export const state = getDefaultState

export const actions = {
  async registerTenant({ commit }, data) {
    try {
      console.log({
        company: data.company,
        name: data.name,
        email: data.email,
        password: data.password,
      })
      const authRes = await this.$axios.$post('auth/register', {
        company: data.company,
        name: data.name,
        email: data.email,
        password: data.password,
      })
      await commit('setTenant', authRes.config.data)
    } catch (error) {
      console.log(error)
    }
  },

  async login({ commit, dispatch }, user) {
    try {
      const authRes = await this.$axios.$post('/auth/login', user)
      commit('setToken', authRes.access_token)
      this.$router.push('/admin')
      dispatch('getCompany')
      dispatch('obituaries/getPersons', null, { root: true })
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
    dispatch('obituaries/clearState', null, { root: true })
    commit('clearState')
  },
  async getCompany({ commit }) {
    try {
      const companyRes = await this.$axios.$get('/company')
      commit('setCompany', companyRes.data)
    } catch (error) {
      console.log('get profile error -> ', error)
    }
  },
}

export const mutations = {
  setCompany(state, company) {
    Vue.set(state, 'company', company)
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

export const getters = {
  getCompanyName(state) {
    return state.company?.name
  },
  isAuthenticated(state) {
    return Boolean(state.token)
  },
  getCompany(state) {
    return state.company
  },
}
