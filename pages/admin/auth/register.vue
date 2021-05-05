<template>
  <div
    class="min-h-screen bg-primary-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <Logo class="h-32 mx-auto" />
      <h2 class="mt-6 text-center text-4xl font-cormorant text-white">
        Register an account
      </h2>
      <p class="mt-2 text-center text-sm text-white">
        Or
        <nuxt-link
          to="login"
          class="font-semibold text-white hover:text-secondary-500"
        >
          login here.
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <Input
            id="firstName"
            label="First name"
            name="fname"
            autocomplete="given-name"
          />
          <Input
            id="lastName"
            label="Last name"
            name="lname"
            autocomplete="family-name"
          />
          <Input
            id="email"
            type="email"
            label="Email address"
            name="email"
            autocomplete="email"
            @change="handleInputChange"
          />
          <Input
            id="phone"
            label="Phonenumber"
            name="phone"
            autocomplete="tel"
            @change="handleInputChange"
          />
          <Input
            id="password"
            v-model="password"
            type="password"
            label="Create Password"
            name="password"
            autocomplete="new-password"
            required="false"
            @change="handleInputChange"
          />
          <Input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            label="Repeat Password"
            name="repeatPassword"
            autocomplete="new-password"
            required="false"
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

export default {
  components: {
    Logo,
    Input,
  },
}
</script>
