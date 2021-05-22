<template>
  <div>
    <form id="obituaryForm" @submit.prevent="submit">
      <div class="w-full h-60 bg-gray-200 relative px-10 mb-24">
        <img
          class="h-44 w-44 bg-gray-100 rounded-full absolute -bottom-16 right-2/4 translate-x-2/4 object-cover"
          src="@/assets/img/simple-avatar.png"
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
              data-location="comment"
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
            <div class="flex items-center mr-4">
              <input
                id="male"
                v-model="gender"
                value="male"
                type="radio"
                data-location="gender"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                @click="handleRadio"
              />
              <label
                for="male"
                class="ml-3 block text-sm font-medium text-gray-700"
                >Mann</label
              >
            </div>
            <div class="flex items-center">
              <input
                id="female"
                v-model="gender"
                data-location="gender"
                value="female"
                type="radio"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                @click="handleRadio"
              />
              <label
                for="female"
                class="ml-3 block text-sm font-medium text-gray-700"
                >Kvinne</label
              >
            </div>
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
            data-location="personalNumber"
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
              <div class="flex items-center mr-10">
                <input
                  id="memoryTrue"
                  v-model="memorypage"
                  type="radio"
                  value="true"
                  data-location="memorypage"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="memoryTrue"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Ja</label
                >
              </div>
              <div class="flex items-center mr-10">
                <input
                  id="memoryFalse"
                  v-model="memorypage"
                  type="radio"
                  value="false"
                  data-location="memorypage"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="memoryFalse"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Nej</label
                >
              </div>
            </div>

            <Label>Livestream</Label>
            <div class="flex mb-8">
              <div class="flex items-center mr-10">
                <input
                  id="livestreamTrue"
                  v-model="liveStream"
                  type="radio"
                  value="true"
                  data-location="liveStream"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="LivestreamTrue"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Ja</label
                >
              </div>
              <div class="flex items-center mr-10">
                <input
                  id="livestreamFalse"
                  v-model="liveStream"
                  type="radio"
                  value="false"
                  data-location="liveStream"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="livestreamFalse"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Nej</label
                >
              </div>
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
              <div class="flex items-center mr-10">
                <input
                  id="condolensesTrue"
                  v-model="allowCondolenses"
                  type="radio"
                  value="true"
                  data-location="allowCondolenses"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="condolensesTrue"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Ja</label
                >
              </div>
              <div class="flex items-center mr-10">
                <input
                  id="condolencesFalse"
                  v-model="allowCondolenses"
                  type="radio"
                  value="false"
                  data-location="allowCondolenses"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="condolensesFalse"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Nej</label
                >
              </div>
            </div>
            <Label>Blomsterbestilling</Label>
            <div class="flex mb-8">
              <div class="flex items-center mr-10">
                <input
                  id="flowerOrdersTrue"
                  v-model="allowFlowerOrders"
                  type="radio"
                  value="true"
                  data-location="allowFlowerOrders"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="flowerOrdersTrue"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Ja</label
                >
              </div>
              <div class="flex items-center mr-10">
                <input
                  id="flowerOrdersFalse"
                  v-model="allowFlowerOrders"
                  type="radio"
                  value="false"
                  data-location="allowFlowerOrders"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="flowerOrdersFalse"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Nej</label
                >
              </div>
            </div>
            <Label>Deltakerregistrering</Label>
            <div class="flex mb-8">
              <div class="flex items-center mr-10">
                <input
                  id="funeralRegistrationTrue"
                  v-model="allowFuneralRegistration"
                  type="radio"
                  value="true"
                  data-location="allowFuneralRegistration"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="funeralRegistrationTrue"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Ja</label
                >
              </div>
              <div class="flex items-center mr-10">
                <input
                  id="funeralRegistrationFalse"
                  v-model="allowFuneralRegistration"
                  type="radio"
                  value="false"
                  data-location="allowFuneralRegistration"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  @click="handleRadio"
                />
                <label
                  for="funeralRegistrationFalse"
                  class="ml-3 block text-sm font-medium text-gray-700"
                  >Nej</label
                >
              </div>
            </div>
            <!-- 
              Going to be implemented in the future
              <admin-button
              ><span slot="text">Moderer inlegg</span>
              <span slot="icon" class="mr-2"><eye-icon /></span
            ></admin-button> -->
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

          <Input
            id="link"
            label="Direktelink"
            name="link"
            data-location="streamlink"
            @change="handleInputChange"
          />
          <!-- <admin-button
            ><span slot="text">Send link på sms</span
            ><span slot="icon" class="pr-2"><mail-icon /></span
          ></admin-button> -->
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
            to="/admin/obituary/create/step-2"
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
        <!-- <nuxt-link
          to="/admin/obituary/create/step-2"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span>Gå videre</span>
          <span><chevron-right /> </span>
        </nuxt-link> -->
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
// import AdminButton from '@/components/ui/buttons/adminButton.vue'
// import MailIcon from '@/assets/svg/mail.svg?inline'
import ChevronRight from '@/assets/svg/chevronRight.svg?inline'
import Loader from '@/assets/svg/loader.svg?inline'

export default {
  components: {
    Input,
    SelectRelation,
    TextArea,
    RadioButton,
    Label,
    // AdminButton,
    // MailIcon,
    ChevronRight,
    Loader,
  },
  layout: 'admin',
  middleware: ['auth'],
  data() {
    return {
      loading: false,
      obituary: {},
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
      person_information: 'person_information',
      avatarImage: null,
      gender: null,
      memorypage: null,
      liveStream: null,
      allowCondolenses: null,
      allowFlowerOrders: null,
      allowFuneralRegistration: null,
    }
  },
  computed: {},
  methods: {
    ...mapActions('obituaries', ['addObituary', 'uploadImage']),
    ...mapMutations('obituaries', ['changeField']),

    handleInputChange({ value, dataLocation }) {
      this[dataLocation] = value
      this.isDirty = true
      this.changeField({
        value,
        dataLocation,
      })
    },
    handleRadio(e) {
      const value = e.target.value
      const dataLocation = e.target.dataset.location
      this.changeField({
        value,
        dataLocation,
      })
    },
    onFileSelected(e) {
      this.avatarImage = e.target.files[0]
      console.log('const value ->', this.avatarImage)
    },
    async submit() {
      this.loading = true
      const response = await this.addObituary({ avatarImage: this.avatarImage })
      console.log('Info ->', response)
      // const updateImageId = await this.updateImageId()
      this.loading = false
      this.$router.push('/admin/obituary/create/step-2')
    },
  },
}
</script>
