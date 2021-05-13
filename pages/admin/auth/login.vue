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
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="submit">
          <Input
            id="email"
            v-model="email"
            type="text"
            label="Email adress"
            name="email"
            data-location="email"
            @change="handleInputChange"
          />

          <Input
            id="password"
            v-model="password"
            type="password"
            label="Password"
            name="password"
            data-location="password"
            @change="handleInputChange"
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

export default {
  components: {
    Logo,
    Input,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      try {
        const response = await this.$axios.$post('auth/login', {
          email: 'sandra@iotek.no',
          password: 'password',
        })

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    // try {
    //   await this.login({
    //     username: this.email,
    //     password: this.password,
    //   })
    // } catch (e) {
    //   this.errorMessage = e.response.data.error
    //   this.error = true
    //   console.log(e.response.data)
    // }
  },
  handleInputChange({ value, dataLocation }) {
    this[dataLocation] = value
  },
}
</script>
