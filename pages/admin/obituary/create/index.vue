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
        <div class="w-1/3">
          <fieldset class="bg-white shadow sm:rounded-lg px-6 pb-10 mb-10">
            <h3 class="text-lg leading-6 font-medium text-gray-900 py-8">
              Kontaktperson
            </h3>

            <Input
              id="contactName"
              v-model="contactName"
              data-location="contactName"
              label="Navn"
              name="contactName"
              @change="handleInputChange"
            />
            <Input
              id="contactEmail"
              v-model="contactEmail"
              type="email"
              data-location="contactEmail"
              label="Epost"
              name="contactEmail"
              @change="handleInputChange"
            />
            <Input
              id="contactTel"
              v-model="contactTel"
              data-location="contactTel"
              label="Telefonnummer"
              name="contactTel"
              @change="handleInputChange"
            />
            <select-relation label="Forhold til avdøde" />
          </fieldset>
          <fieldset class="bg-white shadow sm:rounded-lg px-6 pb-10 pt-6">
            <text-area
              v-model="notes"
              data-location="notes"
              label="Notater"
              name="notes"
              @change="handleInputChange"
            />
          </fieldset>
        </div>

        <fieldset class="bg-white shadow sm:rounded-lg w-3/5 px-6 pb-10">
          <h3 class="py-8 text-lg leading-6 font-medium text-gray-900">
            Avdøde
          </h3>
          <Input
            id="name"
            v-model="name"
            label="Fullt navn"
            name="name"
            data-location="name"
            @change="handleInputChange"
          />
          <Label class="text-sm font-medium text-gray-700 pb-2">Kjønn</Label>
          <div class="flex ml-2 mb-4">
            <radio-button label="Mann" class="mr-4" />
            <radio-button label="Kvinne" />
          </div>
          <Input
            id="commune"
            v-model="commune"
            data-location="commune"
            label="Bostedskommune"
            name="commune"
            @change="handleInputChange"
          />
          <Input
            id="personalNumber"
            v-model="personalNumber"
            data-location="person_information.personalNumber"
            label="Personnummer"
            name="personalNumber"
            @change="handleInputChange"
          />
          <Input
            id="deceasedDate"
            v-model="deceasedDate"
            data-location="deceasedDate"
            label="Dødsdato"
            name="deceasedDate"
            @change="handleInputChange"
          />
          <Input
            id="placeOfDeath"
            v-model="placeOfDeath"
            data-location="placeOfDeath"
            label="Dødssted"
            name="placeOfDeath"
            @change="handleInputChange"
          />
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
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </fieldset>
      </div>
      <h2 class="px-20 mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
        Livestream
      </h2>
      <div class="flex justify-between px-20">
        <div class="w-1/3">
          <fieldset class="bg-white shadow sm:rounded-lg px-6 pb-10 mb-10">
            <h3 class="text-lg leading-6 font-medium text-gray-900 py-8">
              Digitalt
            </h3>
            <Label>Minnesside</Label>
            <div class="flex mb-8">
              <radio-button label="Ja" class="mr-10" />
              <radio-button label="Nej" />
            </div>
            <Label>Livestream</Label>
            <div class="flex">
              <radio-button label="Ja" class="mr-10" />
              <radio-button label="Nej" />
            </div>
          </fieldset>
          <fieldset class="bg-white shadow sm:rounded-lg px-6 pb-10">
            <h3 class="text-lg leading-6 font-medium text-gray-900 pt-8 pb-2">
              Minnesside
            </h3>
            <p class="text-gray-600 text-sm mb-8">
              Minneside gir besøkende mulighet til å sende kondolanser på
              avdødes minneside.
            </p>
            <Label>Tillat kondolanser</Label>
            <div class="flex mb-8">
              <radio-button label="Ja" class="mr-10" />
              <radio-button label="Nej" />
            </div>
            <Label>Blomsterbestilling</Label>
            <div class="flex mb-8">
              <radio-button label="Ja" class="mr-10" />
              <radio-button label="Nej" />
            </div>
            <Label>Deltakerregistrering</Label>
            <div class="flex mb-8">
              <radio-button label="Ja" class="mr-10" />
              <radio-button label="Nej" />
            </div>
            <admin-button
              ><span slot="text">Moderer inlegg</span>
              <span slot="icon" class="mr-2"><eye-icon /></span
            ></admin-button>
          </fieldset>
        </div>

        <fieldset class="bg-white shadow sm:rounded-lg w-3/5 px-6 pb-10">
          <h3 class="pt-8 pb-2 text-lg leading-6 font-medium text-gray-900">
            Link til direktsending
          </h3>
          <p class="text-gray-600 text-sm mb-8">
            Direktelinken er en privat adresse som gir tilgang til begravelsen.
            Anbefal alltid de pårørende om at alle som har denne nettadressen
            har mulighet til å se direkte fra begravelsen.
          </p>

          <Input id="link" label="Direktelink" name="link" />
          <admin-button
            ><span slot="text">Send link på sms</span
            ><span slot="icon" class="pr-2"><mail-icon /></span
          ></admin-button>
          <h3
            class="pt-8 pb-2 mt-8 text-lg leading-6 font-medium text-gray-900"
          >
            Livestream
          </h3>
          <p class="text-gray-600 text-sm mb-8">
            Stream url og key er tilgjengelig 2 dager før begravelsen starter.
          </p>
          <Label>Vis direktesending på minnesside</Label>
          <div class="flex mb-4">
            <radio-button label="Ja" class="mr-10" />
            <radio-button label="Nej" />
          </div>

          <p class="text-gray-600 text-xs mb-8">
            Dette gjør at livestreamen blir vist offentlig til alle som går inn
            på minnesiden.
          </p>
          <text-area label="Embed kode" />
        </fieldset>
      </div>
      <h2 class="px-20 mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
        Dødsannonse
      </h2>
      <div class="bg-white shadow sm:rounded-lg px-6 py-10 mb-10 w-1/3 ml-20">
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
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
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
        <li class="md:flex-1">
          <nuxt-link
            to="/admin/create"
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
          <!-- Upcoming Step -->
          <nuxt-link
            to="/admin/create/step-2"
            class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
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
            to="/admin/create/step-3"
            class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span
              class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
              >Steg 3</span
            >
            <span class="text-sm font-medium">Minnesside</span>
          </nuxt-link>
        </li>
        <button
          type="submit"
          form="obituaryForm"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span>Lagre og gå videre</span>
          <span><chevron-right /> </span>
        </button>
      </ol>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import Input from '@/components/ui/form/Input'
import SelectRelation from '@/components/ui/dropdowns/SelectRelation'
import TextArea from '@/components/ui/form/TextArea'
import RadioButton from '@/components/ui/form/RadioButton'
import Label from '@/components/ui/typography/Label'
import AdminButton from '@/components/ui/buttons/adminButton.vue'
import MailIcon from '@/assets/svg/mail.svg?inline'
import EyeIcon from '@/assets/svg/eye.svg?inline'
import ChevronRight from '@/assets/svg/chevronRight.svg?inline'
import Loader from '@/assets/svg/loader.svg?inline'

export default {
  components: {
    Input,
    SelectRelation,
    TextArea,
    RadioButton,
    Label,
    AdminButton,
    MailIcon,
    EyeIcon,
    ChevronRight,
    Loader,
  },
  layout: 'admin',
  middleware: ['auth'],
  data() {
    return {
      loading: false,
      obituary: {
        name: 'Anker Olav Johanssen',
        person_information: {
          sex: 'Male',
          commune: 'Vågan',
          personalNumber: '1923.04.15',
          deceasedDate: '2021.05.03',
          placeOfDeath: 'Nordlands Sykehus',
        },
        funeral_information: {
          birthday: '1923.04.15',
          deceasedDate: '2021.05.03',
          church: 'Borge Kirke',
          cementary: 'Vik kirkegård',
          date: '2021.05.23',
          memoryPage: true,
          livestream: true,
          allowCondolences: true,
          allowFlowerOrder: true,
          allowRegisterAttendace: true,
        },
        contact: {
          contactName: 'Jonas Johanssen',
          contactEmail: 'johansen@mail.no',
          contactTel: '95677849',
          contactRelation: 'Child',
        },
        comment: 'Dette er en testkommentar',
        bg_image_id:
          'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        person_image_id:
          'https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      },

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
    }
  },
  computed: {},
  methods: {
    ...mapActions('obituaries', ['addObituary']),
    ...mapMutations('obituaries', ['changeField']),

    handleInputChange({ value, dataLocation }) {
      this[dataLocation] = value
      this.isDirty = true
      this.changeField({
        value,
        dataLocation,
      })
    },
    async submit({ state }) {
      this.loading = true
      console.log('Obituary i index ->', this.obituary)
      const response = await this.addObituary(this.obituary)
      this.loading = false

      console.log(response)
    },
  },
}
</script>
