<template>
  <div>
    <div class="flex">
      <div
        class="w-1/2 bg-gray-200 h-screen flex flex-col justify-center items-center"
      >
        <deceased-profile />
        <div><img src="@/assets/img/obituary-1.png" alt="Dødsannonse" /></div>
      </div>
      <div class="w-1/2 px-12">
        <h2 class="mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
          Forhåndstitt
        </h2>
        <p class="text-gray-600 text-md mb-8">
          Her er en liten idé om hvordan minnessiden blir. Dersom du har valgt
          att tillate kondolanser så kommer disse in på denne siden. Du kan også
          velge å skrive en tekst eller dikt som blir att vises på denne siden.
        </p>
        <form class="bg-white shadow sm:rounded-lg px-6 pb-10 pt-6">
          <text-area label="Legg till tekst eller dikt" />
        </form>
        <div class="bg-white w-10/12 mx-auto mb-20 rounded-lg border mt-20">
          <CondolanceLine
            author="Karianne Johansen"
            time="4 timer"
            heart="true"
            candle="true"
          >
          </CondolanceLine>
          <CondolanceLine author="Jens Nordmann" time="1 dag" candle="true">
            Dette var bare trist. Mange gode minner fra ungdommen. Hvil i fred
          </CondolanceLine>
        </div>
      </div>
    </div>

    <nav aria-label="Progress" class="mt-12 bg-white">
      <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        <nuxt-link
          to="/admin/obituary/create/step-2"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span><chevron-left /> </span>
          <span>Gå tilbake</span>
        </nuxt-link>
        <li class="md:flex-1">
          <nuxt-link
            to="/admin/obituary/create"
            class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span
              class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800 pl-4"
              >Steg 1</span
            >
            <span class="pl-4 mb-4 text-sm font-medium">Info</span>
          </nuxt-link>
        </li>

        <li class="md:flex-1">
          <nuxt-link
            to="/admin/obituary/create/step-2"
            class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span
              class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800 pl-4"
              >Steg 2</span
            >
            <span class="text-sm font-medium">Bilder</span>
          </nuxt-link>
        </li>
        <li class="md:flex-1">
          <nuxt-link
            to="/admin/obituary/create/step-3"
            class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span
              class="text-xs text-indigo-600 font-semibold tracking-wide uppercase"
              >Steg 3</span
            >
            <span class="text-sm font-medium">Minnesside</span>
          </nuxt-link>
        </li>
        <nuxt-link
          to="/admin/create/step-3"
          class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <span>Godkjenn og lagre</span>
          <span><chevron-right /> </span>
        </nuxt-link>
      </ol>
    </nav>
  </div>
</template>
<script>
import DeceasedProfile from '@/components/ui/DeceasedProfile'
import TextArea from '@/components/ui/form/TextArea'
import CondolanceLine from '@/components/condolences/CondolanceLine'
import ChevronLeft from '@/assets/svg/chevronLeft.svg?inline'

export default {
  components: {
    DeceasedProfile,
    TextArea,
    CondolanceLine,
    ChevronLeft,
  },
  layout: 'admin',
  middleware: ['auth'],
}
</script>
