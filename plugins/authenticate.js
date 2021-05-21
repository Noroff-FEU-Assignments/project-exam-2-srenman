export default ({ store }) => {
  const token = store.state.auth.token
  if (!token) return
  store.commit('auth/setToken', token)
  store.dispatch('auth/getCompany')
}
