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
      dispatch('getPersons')
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
  async getCompany({ commit }) {
    try {
      const companyRes = await this.$axios.$get('/company', {
        header:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3RhZ2luZy5taW5uZWFwaS5ub1wvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjEwMzIxODMsImV4cCI6MTYyMTAzNTc4MywibmJmIjoxNjIxMDMyMTgzLCJqdGkiOiJDY0hCMVFZRG9xVktZN001Iiwic3ViIjoiNDFmYzE1ZGYtNTgxYi00Yzg0LWI1YjEtN2Q5ZDE0ZmMzMjc4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.q2GEtCaqVAaWGP0QUtdGalB4XMLYI-0r6NkFnui3JpE',
      })
      commit('setCompany', companyRes.data)
    } catch (error) {
      console.log('get profile error -> ', error)
    }
  },
  async getPersons({ commit }) {
    try {
      const persons = await this.$axios.$get('/person', {
        header:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3RhZ2luZy5taW5uZWFwaS5ub1wvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjEwMzIxODMsImV4cCI6MTYyMTAzNTc4MywibmJmIjoxNjIxMDMyMTgzLCJqdGkiOiJDY0hCMVFZRG9xVktZN001Iiwic3ViIjoiNDFmYzE1ZGYtNTgxYi00Yzg0LWI1YjEtN2Q5ZDE0ZmMzMjc4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.q2GEtCaqVAaWGP0QUtdGalB4XMLYI-0r6NkFnui3JpE',
      })
      commit('setPersons', persons.data)
    } catch (error) {
      console.log('get persons error ->', error)
    }
  },
}

export const mutations = {
  setCompany(state, company) {
    Vue.set(state, 'company', company)
  },
  setPersons(state, persons) {
    Vue.set(state, 'persons', persons)
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
