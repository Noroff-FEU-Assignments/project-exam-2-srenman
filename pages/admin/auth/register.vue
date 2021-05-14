<template>
  <div
    class="min-h-screen bg-primary-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <Logo class="h-32 mx-auto" />
      <h2 class="mt-6 text-center text-4xl font-cormorant text-white">
        Registrer en bruker
      </h2>
      <p class="mt-2 text-center text-sm text-white">
        eler
        <nuxt-link
          to="login"
          class="font-semibold text-white hover:text-secondary-500"
        >
          logg in her.
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="submit">
          <Input
            id="companyName"
            v-model="companyName"
            label="Bedriftnavn"
            name="companyName"
            data-location="companyName"
            @change="handleInputChange"
          />
          <Input
            id="companyEmail"
            v-model="companyEmail"
            type="email"
            label="Epost til bedriften"
            name="email"
            data-location="companyEmail"
            @change="handleInputChange"
          />

          <Input
            id="street"
            v-model="street"
            label="Adresse"
            name="street"
            data-location="street"
            @change="handleInputChange"
          />
          <Input
            id="zipCode"
            v-model="zipCode"
            label="Postkode"
            name="zipCode"
            data-location="zipCode"
            @change="handleInputChange"
          />
          <Input
            id="city"
            v-model="city"
            label="Sted"
            name="city"
            data-location="city"
            @change="handleInputChange"
          />
          <div class="bg-gray-200 h-0.5"></div>

          <Input
            id="name"
            v-model="name"
            label="Ditt navn"
            name="name"
            autocomplete="name"
            data-location="name"
            @change="handleInputChange"
          />
          <Input
            id="email"
            v-model="email"
            type="email"
            label="Din epost (denne brukes for å logge in med)"
            name="email"
            autocomplete="email"
            data-location="email"
            @change="handleInputChange"
          />

          <Input
            id="password"
            v-model="password"
            type="password"
            label="Create Password"
            name="password"
            autocomplete="new-password"
            data-location="password"
            @change="handleInputChange"
          />
          <Input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            label="Repeat Password"
            name="confirmPassword"
            data-location="confirmPassword"
            @change="handleInputChange"
          />

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create account
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
      companyName: '',
      companyEmail: '',
      street: '',
      zipCode: '',
      city: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsMatch: false,
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    ...mapActions('auth', ['registerTenant']),

    async submit() {
      await this.comparePasswords(this.password, this.confirmPassword)

      if (this.passwordsMatch === true) {
        try {
          this.registerTenant({
            company: {
              name: this.companyName,
              email: this.companyEmail,
              address: this.street,
              zipcode: this.zipCode,
              city: this.city,
            },
            name: this.name,
            email: this.email,
            password: this.password,
          })
        } catch (e) {
          this.errorMessage = e.response.data.error
          this.error = true
          console.log(e.response.data)
        }
      } else {
        this.errorMessage = 'The passwords did not match'
        this.error = true
      }
    },

    handleInputChange({ value, dataLocation }) {
      this[dataLocation] = value
    },
    comparePasswords(password, confirmPassword) {
      if (password === confirmPassword) {
        return (this.passwordsMatch = true)
      } else {
        return (this.passwordsMatch = false)
      }
    },
  },
}
</script>
