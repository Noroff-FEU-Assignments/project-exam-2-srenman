export default function ({ store, redirect }) {
  // If authenticated
  if (store.state.auth.token) {
    return redirect('/admin')
  }
}
