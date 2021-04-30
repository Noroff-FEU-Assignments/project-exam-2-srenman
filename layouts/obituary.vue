<template>
  <div class="h-screen flex overflow-hidden bg-secondary-100">
    <div
      class="bg-primary-200 w-1/3 p-4 flex flex-col items-center justify-center"
    >
      <div class="flex items-center my-10">
        <div class="h-40 w-44">
          <img
            class="h-36 w-36 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt="Portrait"
          />
        </div>

        <div class="p-2 w-3/5">
          <h2 class="text-lg font-bold">Karl Olav Anker Johansen</h2>
          <p class="font-semibold">1.4.1928 - 23.12.2020</p>
          <p>fra <Bold>Borge Kirke</Bold> til <Bold>Vik Kirkegård </Bold></p>

          <p class="font-semibold">8. januar 2020 kl 10.30</p>
        </div>
      </div>
      <div class="my-10">
        <nuxt-link
          to="/obituary"
          class="bg-primary-500 px-6 py-2 rounded-md hover:bg-primary-700 text-white mx-2"
          >Kondolanser</nuxt-link
        >
        <nuxt-link
          to="/obituary/funeral"
          class="bg-primary-500 px-6 py-2 rounded-md hover:bg-primary-700 text-white"
          >Begravelse</nuxt-link
        >
      </div>
      <div><img src="../assets/img/obituary-1.png" alt="Dødsannonse" /></div>
    </div>

    <main class="flex-1 relative overflow-y-auto focus:outline-none">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Bold from '../components/ui/typography/Bold'

export default {
  components: {
    Bold,
  },
}
</script>
