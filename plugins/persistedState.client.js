import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'gravferdshjelpen-state',
    paths: ['auth.token'],
  })(store)
}
