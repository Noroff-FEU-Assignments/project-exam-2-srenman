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
      commit('setPersons', persons.data)
      return persons
    } catch (error) {
      console.log('get persons error ->', error)
    }
  },
  async getObituary({ commit }, obituaryId) {
    try {
      const obituary = await this.$axios.$get(`/person/${obituaryId}`)
      commit('setCurrentObituary', obituary.data)
      return obituary
    } catch (error) {
      console.log('get obituary error ->', error)
    }
  },

  async getPublicPersons() {
    try {
      const persons = await this.$axios.$get('/public/all')
      return persons
    } catch (error) {
      console.log('get persons error ->', error)
    }
  },
  async getPersonById({ commit }, personId) {
    try {
      const person = await this.$axios.$get(`/public/all/${personId}`)
      commit('setCurrentPerson', person.data)
      return person
    } catch (error) {
      console.log('get person error ->', error)
    }
  },

  async addObituary({ state }, data) {
    const { avatarImage } = data
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
          time: info.time,
          memoryPage: info.memoryPage,
          livestream: info.livestream,
          allowCondolences: info.allowCondolences,
          allowFlowerOrder: info.allowFlowerOrder,
          allowRegisterAttendace: info.allowRegisterAttendace,
          poemText: info.poemText,
          poemAuthor: info.poemAuthor,
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
      const personId = obituary.data.id
      const fd = new FormData()
      fd.append('file', avatarImage)
      fd.append('collection', 'avatar')
      const imageResponse = await this.$axios.$post(
        `/person/${personId}/media`,
        fd,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      const profileImage = imageResponse.data.src

      const updateImageId = await this.$axios.$put(`/person/${personId}`, {
        person_image_id: profileImage,
      })
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
  setCurrentObituary(state, obituary) {
    Vue.set(state, 'currentObituary', obituary)
  },
  setCurrentPerson(state, person) {
    Vue.set(state, 'currentPerson', person)
  },
  changeField: (state, event) => {
    state.createObituary[event.dataLocation] = event.value
  },
  editField: (state, event) => {
    state.currentObituary[event.dataLocation] = event.value
  },
  clearState(state) {
    Object.assign(state, getDefaultState())
  },
}

export const getters = {
  getAdminPersons(state) {
    return state.persons
  },
  getCurrentPerson(state) {
    return state.currentPerson
  },
}
