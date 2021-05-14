<template>
  <div
    class="min-h-screen bg-primary-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <Logo class="h-32 mx-auto" />
      <h2 class="mt-6 text-center text-4xl font-cormorant text-white">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-white">
        Or
        <nuxt-link
          to="register"
          class="font-semibold text-white hover:text-secondary-500"
        >
          register here.
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        v-if="loading"
        class="absolute inset-0 bg-gray-200 bg-opacity-75 z-50 sm:rounded-lg flex items-center justify-center"
      >
        <Loader class="w-16 mx-auto animate-spin text-gray-500" />
      </div>
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="submit">
          <Input
            id="email"
            :error="getError('email')"
            type="text"
            label="Email adress"
            name="email"
            :value.sync="user.email"
          />

          <Input
            id="password"
            :error="getError('password')"
            type="password"
            label="Password"
            name="password"
            :value.sync="user.password"
          />

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '@/assets/Logo'
import Input from '@/components/ui/form/Input'
import { mapActions } from 'vuex'
import Loader from '@/assets/svg/loader.svg?inline'

export default {
  components: {
    Logo,
    Input,
    Loader,
  },
  middleware: ['login'],
  data() {
    return {
      loading: false,
      user: {
        email: 'sandra@iotek.no',
        password: 'password',
      },
      errors: {},
    }
  },
  methods: {
    ...mapActions('auth', ['login']),

    isError(prop) {
      if (!this.errors) return false
      return this.errors[prop] !== undefined
    },
    getError(prop) {
      return this.isError(prop) ? this.errors[prop][0] : ''
    },

    async submit() {
      this.loading = true
      const response = await this.login(this.user)
      this.loading = false

      console.log(response)

      this.errors = response.errors
      if (response.error === 'Unauthorized') {
        this.errors = {
          password: 'aefr',
          email: 'asdfsdf',
        }
      }
    },
  },
}
</script>
