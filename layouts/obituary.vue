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
          <h2 class="text-lg font-bold">{{ person.name }}</h2>
          <p class="font-semibold">
            {{ person.person_information.birthday }} -
            {{ person.person_information.deceased }}
          </p>
          <p>
            fra <Bold>{{ person.funeral_information.church }}</Bold> til
            <Bold> {{ person.funeral_information.cementary }} </Bold>
          </p>

          <p class="font-semibold">{{ person.funeral_information.date }}</p>
        </div>
      </div>
      <div class="my-10">
        <nuxt-link
          :to="`/obituary/${person.id}`"
          class="bg-primary-500 px-6 py-2 rounded-md hover:bg-primary-700 text-white mx-2"
          >Kondolanser</nuxt-link
        >
        <nuxt-link
          :to="`/obituary/${person.id}/funeral`"
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
  data() {
    return {
      person: {
        id: '123',
        name: 'Ola Nordmann',
        status: 'Aktiv',
        person_information: {
          birthday: '1934.04.23',
          deceased: '2021.04.26',
        },
        funeral_information: {
          church: 'Borge Kirke',
          cementary: 'Vik kirkegård',
          date: '8. Januar 2021 kl. 10.30',
        },
        bg_image_id:
          'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        person_image_id:
          'https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      },
    }
  },
}
</script>
