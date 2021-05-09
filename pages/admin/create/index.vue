<template>
  <div>
    <div class="w-full h-60 bg-gray-200 relative px-10 mb-24">
      <img
        class="h-44 w-44 bg-black rounded-full absolute -bottom-16 right-2/4 translate-x-2/4 object-cover"
        src="https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      />
      <h1 class="pt-8 font-semibold text-xl">Karl Olav Anker Johansen</h1>
      <p>1.4.1928 - 23.12.2020</p>
    </div>
    <div class="flex justify-between px-20">
      <div class="w-1/3">
        <form class="bg-white shadow sm:rounded-lg px-6 pb-10 mb-10">
          <h3 class="text-lg leading-6 font-medium text-gray-900 py-8">
            Kontaktperson
          </h3>

          <Input id="contactName" label="Navn" name="contactName" />
          <Input id="contactEmail" label="Epost" name="contactEmail" />
          <Input id="contactTel" label="Telefonnummer" name="contactTel" />
          <select-relation label="Forhold til avdøde" />
        </form>
        <form class="bg-white shadow sm:rounded-lg px-6 pb-10 pt-6">
          <text-area label="Notater" />
        </form>
      </div>

      <form class="bg-white shadow sm:rounded-lg w-3/5 px-6 pb-10">
        <h3 class="py-8 text-lg leading-6 font-medium text-gray-900">Avdøde</h3>
        <Input id="name" label="Fullt navn" name="name" />
        <Label class="text-sm font-medium text-gray-700 pb-2">Kjønn</Label>
        <div class="flex ml-2 mb-4">
          <radio-button label="Mann" class="mr-4" />
          <radio-button label="Kvinne" />
        </div>
        <Input id="commune" label="Bostedskommune" name="commune" />
        <Input id="personalNumber" label="Personnummer" name="personalNumber" />
        <Input id="placeOfDeath" label="Dødssted" name="placeOfDeath" />
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
      </form>
    </div>
    <h2 class="px-20 mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
      Livestream
    </h2>
    <div class="flex justify-between px-20">
      <div class="w-1/3">
        <form class="bg-white shadow sm:rounded-lg px-6 pb-10 mb-10">
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
        </form>
        <form class="bg-white shadow sm:rounded-lg px-6 pb-10">
          <h3 class="text-lg leading-6 font-medium text-gray-900 pt-8 pb-2">
            Minnesside
          </h3>
          <p class="text-gray-600 text-sm mb-8">
            Minneside gir besøkende mulighet til å sende kondolanser på avdødes
            minneside.
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
        </form>
      </div>

      <form class="bg-white shadow sm:rounded-lg w-3/5 px-6 pb-10">
        <h3 class="pt-8 pb-2 text-lg leading-6 font-medium text-gray-900">
          Link til direktsending
        </h3>
        <p class="text-gray-600 text-sm mb-8">
          Direktelinken er en privat adresse som gir tilgang til begravelsen.
          Anbefal alltid de pårørende om at alle som har denne nettadressen har
          mulighet til å se direkte fra begravelsen.
        </p>

        <Input id="link" label="Direktelink" name="link" />
        <admin-button
          ><span slot="text">Send link på sms</span
          ><span slot="icon" class="pr-2"><mail-icon /></span
        ></admin-button>
        <h3 class="pt-8 pb-2 mt-8 text-lg leading-6 font-medium text-gray-900">
          Livestream
        </h3>
        <p class="text-gray-600 text-sm mb-8">
          Stream url og key er tilgjengelig 2 dager før begravelsen starter.
        </p>
        <Label>Vis direktesending på minnesside</Label>
        <div class="flex mb-4">
          <radio-button label="Ja" class="mr-10" /> <radio-button label="Nej" />
        </div>

        <p class="text-gray-600 text-xs mb-8">
          Dette gjør at livestreamen blir vist offentlig til alle som går inn på
          minnesiden.
        </p>
        <text-area label="Embed kode" />
      </form>
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
        <nuxt-link
          to="create/admin/step-2"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span>Lagre og gå videre</span>
          <span><chevron-right /> </span>
        </nuxt-link>
      </ol>
    </nav>
  </div>
</template>
<script>
import Input from '@/components/ui/form/Input'
import SelectRelation from '@/components/ui/dropdowns/SelectRelation'
import TextArea from '@/components/ui/form/TextArea'
import RadioButton from '@/components/ui/form/RadioButton'
import Label from '@/components/ui/typography/Label'
import AdminButton from '@/components/ui/buttons/adminButton.vue'
import MailIcon from '@/assets/svg/mail.svg?inline'
import EyeIcon from '@/assets/svg/eye.svg?inline'
import ChevronRight from '@/assets/svg/chevronRight.svg?inline'

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
  },

  layout: 'admin',
}
</script>
