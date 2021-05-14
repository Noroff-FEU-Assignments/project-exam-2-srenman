<template>
  <div v-show="sidebarVisible" class="md:hidden">
    <div class="fixed inset-0 flex z-40">
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="sidebarVisible"
          class="fixed inset-0"
          :aria-hidden="sidebarVisible"
        >
          <div class="absolute inset-0 bg-gray-700 opacity-80"></div>
        </div>
      </transition>
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-show="sidebarVisible"
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="sidebarVisible = false"
            >
              <span class="sr-only">Close sidebar</span>

              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

              <!-- Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" -->
              <!-- Heroicon name: outline/home -->
              <div>
                <Nuxt-link
                  to="/admin"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  @click="toggleSidebar"
                >
                  <!-- Heroicon name: outline/users -->
                  <svg
                    class="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Aktive oppdrag
                </Nuxt-link>

                <Nuxt-link
                  to="/admin/archive"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  @click="toggleSidebar"
                >
                  <!-- Heroicon name: outline/folder -->
                  <svg
                    class="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Arkiv
                </Nuxt-link>

                <Nuxt-link
                  to="/admin/obituary/create"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  @click="toggleSidebar"
                >
                  <!-- Heroicon name: outline/calendar -->
                  <svg
                    class="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Opprett nytt oppdrag
                </Nuxt-link>
              </div>
            </nav>
          </div>
        </div>
      </transition>

      <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarMobile',
  components: {},
  data() {
    return {
      sidebarVisible: false,
    }
  },
  mounted() {
    this.$root.$on('toggle-sidebar', this.toggleSidebar)
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    },
  },
}
</script>
