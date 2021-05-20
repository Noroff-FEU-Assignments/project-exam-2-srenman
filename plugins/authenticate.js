export default ({ store }) => {
  console.log(store.state.auth.token)
  const token = store.state.auth.token?.token
  if (!token) return
  store.commit('auth/setToken', token)
  store.dispatch('auth/getCompany')
}
