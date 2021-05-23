<template>
  <div class="h-screen flex overflow-hidden bg-secondary-100">
    <div class="w-1/3 p-4 flex flex-col items-center justify-center relative">
      <img
        v-if="person.bg_image_id === null"
        class="h-screen absolute z-0"
        src="https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        alt="background image"
      />
      <img
        v-else
        class="h-screen absolute z-0"
        :src="person.bg_image_id"
        alt="background image"
      />
      <div class="flex items-center my-10 z-10">
        <div class="h-40 w-44">
          <img
            v-if="person.person_image_id === null"
            class="h-36 w-36 rounded-full object-cover"
            src="../assets/img/simple-avatar.png"
            alt="Portrait"
          />
          <img
            v-else
            class="h-36 w-36 rounded-full object-cover"
            :src="person.person_image_id"
            alt="Portrait"
          />
        </div>

        <div class="p-2 w-3/5">
          <h2 class="text-lg font-bold">{{ person.name }}</h2>
          <p class="font-semibold">
            {{ funeral.birthday }} -
            {{ funeral.deceasedDate }}
          </p>
          <p>
            fra <Bold>{{ funeral.church }}</Bold> til
            <Bold> {{ funeral.cementary }} </Bold>
          </p>

          <p class="font-semibold">{{ funeral.date }}</p>
        </div>
      </div>
      <div class="my-10 z-10">
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
      <div class="z-10">
        <img src="@/assets/img/obituary-1.png" alt="Dødsannonse" />
      </div>
    </div>

    <main class="flex-1 relative overflow-y-auto focus:outline-none">
      <Nuxt />
    </main>
  </div>
</template>
<script>
// import Bold from '@/components/ui/typography/Bold'
import { mapActions } from 'vuex'

export default {
  components: {
    // Bold,
  },
  data() {
    return {
      person: {},
      funeral: {},
    }
  },
  beforeMount() {
    this.displayPerson()
  },
  methods: {
    ...mapActions('obituaries', ['getPersonById']),
    async displayPerson() {
      const response = await this.getPersonById(this.$route.params.id)
      this.person = response.data
      this.funeral = response.data.funeral_information
    },
  },
}
</script>
<style>
.bg-img {
  background-image: url('https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80');
  background-repeat: no-repeat, repeat;
  background-color: #ced3d2;
  background-position: center;
  background-size: cover;
}
</style>
