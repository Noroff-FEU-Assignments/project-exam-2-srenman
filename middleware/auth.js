export default function ({ store, redirect }) {
  // If not authenticated
  if (!store.state.auth.token) {
    return redirect('/admin/auth/login')
  }
}
