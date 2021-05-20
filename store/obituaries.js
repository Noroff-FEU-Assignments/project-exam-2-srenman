import Vue from 'vue'
const getDefaultState = () => ({
  createObituary: {},
})

export const state = getDefaultState

export const actions = {
  changeField({ commit }, text) {
    commit('changeField', text)
  },
  async getPersons({ commit }) {
    try {
      const persons = await this.$axios.$get('/person')
      console.log('getting persons', persons)
      commit('setPersons', persons.data)
    } catch (error) {
      console.log('get persons error ->', error)
    }
  },
  async addObituary({ state }, data) {
    try {
      const info = state.createObituary
      const obituary = await this.$axios.$post('/person', {
        name: info.name,
        person_information: {
          sex: info.sex,
          commune: info.commune,
          personalNumber: info.personalNumber,
          deceasedDate: info.deceasedDate,
          placeOfDeath: info.placeOfDeath,
        },
        funeral_information: {
          birthday: info.personalNumber,
          deceasedDate: info.deceasedDate,
          church: info.church,
          cementary: info.cementary,
          date: info.funeralDate,
          memoryPage: info.memoryPage,
          livestream: info.livestream,
          allowCondolences: info.allowCondolences,
          allowFlowerOrder: info.allowFlowerOrder,
          allowRegisterAttendace: info.allowRegisterAttendace,
        },
        contact: {
          contactName: info.contactName,
          contactEmail: info.contactEmail,
          contactTel: info.contactTel,
          contactRelation: info.contactRelation,
        },
        comment: info.comment,
        bg_image_id: info.bg_image_id,
        person_image_id: info.person_image_id,
        completed_at: info.completeDate,
      })
      console.log('response ->', obituary)
      this.$router.push('/admin/obituary/create/step-2')
    } catch (error) {
      console.log('error ->', error)
    }
  },
  clearState({ commit }) {
    commit('clearState')
  },
}

export const mutations = {
  setPersons(state, persons) {
    Vue.set(state, 'persons', persons)
  },
  changeField: (state, event) => {
    state.createObituary[event.dataLocation] = event.value
  },
  clearState(state) {
    Object.assign(state, getDefaultState())
  },
}

export const getters = {
  getPersons(state) {
    console.log('returning persons ->', state.persons)
    return state.persons
  },
}
