<template>
  <div>
    <h2 class="px-20 mt-8 py-8 text-2xl leading-7 font-bold text-gray-700">
      Velg bakgrunnsbilde
    </h2>
    <div class="flex flex-wrap mx-20">
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
      <div class="bg-gray-300 h-52 w-52 mb-10 mr-4"></div>
    </div>
    <nav aria-label="Progress" class="mt-12 bg-white">
      <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        <li class="md:flex-1">
          <nuxt-link
            to="/admin/create"
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
          <!-- Upcoming Step -->
          <nuxt-link
            to="/admin/create/step-2"
            class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            aria-current="step"
          >
            <span
              class="text-xs text-indigo-600 font-semibold tracking-wide uppercase"
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
          to="/admin/create/step-3"
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
export default {
  layout: 'admin',
}
</script>
