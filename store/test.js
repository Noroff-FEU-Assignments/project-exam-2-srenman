import Vue from 'vue'
const getDefaultObituary = () => ({
  createObituary: {
    person_information: {
      name: null,
      sex: null,
      commune: null,
      personalNumber: null,
      deceasedDate: null,
      placeOfDeath: null,
    },
    funeral_information: {
      church: null,
      date: null,
    },
    contact: {
      name: null,
      email: null,
      tel: null,
      relation: null,
    },
    bg_image_id: null,
    person_image_id: null,
  },
})

export const state = getDefaultObituary

export const actions = {
  changeField({ commit }, text) {
    commit('changeField', text)
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
  setPersons(state, persons) {
    Vue.set(state, 'persons', persons)
  },
  changeField: (state, event) => {
    state.createObituary[event.dataLocation] = event.value
  },
}

export const getters = {
  getPersons(state) {
    return state.persons
  },
}

export default {
  state,
}
