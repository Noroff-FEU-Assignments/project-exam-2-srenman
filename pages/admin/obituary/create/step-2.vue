<template>
  <div>
    <form id="obituaryForm" @submit.prevent="submit">
      <div class="w-full h-60 bg-gray-200 relative px-10 mb-24">
        <img
          class="h-44 w-44 bg-black rounded-full absolute -bottom-16 right-2/4 translate-x-2/4 object-cover"
          src="https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        />
        <h1 class="pt-8 font-semibold text-xl">{{ name }}</h1>
        <p>{{ personalNumber }} - {{ deceasedDate }}</p>
      </div>
      <div class="flex justify-between px-20">
        <fieldset class="bg-white shadow sm:rounded-lg w-full px-6 pb-10">
          <h3 class="py-8 text-lg leading-6 font-medium text-gray-900">
            Begravelse
          </h3>
          <Input
            id="funeralDate"
            v-model="funeralDate"
            label="Dato før begravelse"
            name="funeralDate"
            data-location="funeralDate"
            @change="handleInputChange"
          />
          <Input
            id="funeralTime"
            v-model="funeralTime"
            data-location="funeralTime"
            label="Klokkeslett"
            name="funeralTime"
            @change="handleInputChange"
          />
          <Input
            id="church"
            v-model="church"
            data-location="church"
            label="Kirke"
            name="church"
            @change="handleInputChange"
          />
          <Input
            id="cementary"
            v-model="cementary"
            data-location="cementary"
            label="Kirkegård"
            name="cementary"
            @change="handleInputChange"
          />
        </fieldset>
      </div>

      <h2 class="px-20 mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
        Dødsannonse
      </h2>
      <div class="bg-white shadow sm:rounded-lg px-6 py-10 mb-10 w-2/3 ml-20">
        <Label>Last opp bilde av dødsannonse her</Label>
        <div
          class="w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer mx-auto bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  @change="onFileSelected"
                />
              </label>
            </div>
            <p class="text-xs text-gray-500">JPG up to 32MB</p>
          </div>
        </div>
      </div>
    </form>
    <div
      v-if="loading"
      class="absolute inset-0 bg-gray-200 bg-opacity-75 z-50 sm:rounded-lg flex items-center justify-center"
    >
      <Loader class="w-16 mx-auto animate-spin text-gray-500" />
    </div>

    <nav aria-label="Progress" class="mt-12 bg-white">
      <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        <nuxt-link
          to="/admin/obituary/create/"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span><chevron-left /> </span>
          <span>Gå tilbake</span>
        </nuxt-link>
        <li class="md:flex-1">
          <nuxt-link
            to="/admin/obituary/create"
            class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span
              class="pl-4 text-xs text-indigo-600 font-semibold tracking-wide uppercase"
              >Steg 1</span
            >
            <span class="pl-4 mb-4 text-sm font-medium">Info</span>
          </nuxt-link>
        </li>

        <li class="md:flex-1">
          <nuxt-link
            to="/admin/obituary/create/step-2"
            class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span
              class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
              >Steg 2</span
            >
            <span class="text-sm font-medium">Bilder</span>
          </nuxt-link>
        </li>
        <li class="md:flex-1">
          <!-- Upcoming Step -->
          <nuxt-link
            to="/admin/obituary/create/step-3"
            class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span
              class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
              >Steg 3</span
            >
            <span class="text-sm font-medium">Minnesside</span>
          </nuxt-link>
        </li>
        <nuxt-link
          to="/admin/obituary/create/step-3"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span>Gå videre</span>
          <span><chevron-right /> </span>
        </nuxt-link>
      </ol>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import Input from '@/components/ui/form/Input'
import Label from '@/components/ui/typography/Label'
import ChevronRight from '@/assets/svg/chevronRight.svg?inline'
import ChevronLeft from '@/assets/svg/chevronLeft.svg?inline'
import Loader from '@/assets/svg/loader.svg?inline'

export default {
  components: {
    Input,
    Label,
    ChevronRight,
    ChevronLeft,
    Loader,
  },
  layout: 'admin',
  middleware: ['auth'],
  data() {
    return {
      loading: false,
      obituary: {},
      obitauryImage: null,

      contactName: null,
      contactEmail: null,
      contactTel: null,
      contactRelation: null,
      notes: null,
      name: null,
      sex: null,
      commune: null,
      personalNumber: null,
      deceasedDate: null,
      placeOfDeath: null,
      church: null,
      cementary: null,
      funeralDate: null,
      funeralTime: null,
      poemText: null,
      poemAuthor: null,
    }
  },
  computed: {},
  methods: {
    ...mapActions('obituaries', ['addFuneralInformation']),
    ...mapMutations('obituaries', ['changeField']),

    handleInputChange({ value, dataLocation }) {
      this[dataLocation] = value
      this.isDirty = true
      this.changeField({
        value,
        dataLocation,
      })
    },
    onFileSelected(e) {
      this.obitauryImage = e.target.files[0]
    },
    async submit() {
      this.loading = true
      const response = await this.addFuneralInformation({
        obituaryImage: this.obituaryImage,
      })
      console.log(response)
      this.loading = false
      this.$router.push('/admin/obituary/create/step-3')
    },
  },
}
</script>
