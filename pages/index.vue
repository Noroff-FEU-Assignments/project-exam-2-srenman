<template>
  <div>
    <div class="h-screen flex overflow-hidden bg-secondary-100">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div
        class="fixed inset-0 flex z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      ></div>

      <!-- Static sidebar for desktop -->
      <div
        class="hidden bg-primary-500 text-white md:flex md:flex-shrink-0 items-center"
      >
        <div class="flex items-center pb-24 flex-col w-96 text-center">
          <div class="w-40 mb-12">
            <Logo />
          </div>
          <Heading class="text-5xl">Minnessider</Heading>
          <Paragraph class="mt-6 px-10 text-left">
            Body copy sit amet, consectetuer adipiscing elit, sed diam nonummy.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy
          </Paragraph>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          >
            <!-- Heroicon name: outline/menu-alt-2 -->
            <svg
              class="h-6 w-6"
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex-1 px-4 flex justify-between">
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0" action="#" method="GET">
                <label for="search_field" class="sr-only">Søk</label>
                <div
                  class="relative w-full text-gray-400 focus-within:text-gray-600"
                >
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    v-model="filter"
                    class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Søk et navn"
                    type="search"
                    name="search"
                    @keyup="updateSearch"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <main
          class="flex-1 relative overflow-y-auto font-sans focus:outline-none"
        >
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-6 flex flex-wrap">
              <Card
                v-for="obituary in filterResult"
                :key="obituary.id"
                :data="obituary"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '../assets/Logo'
import Card from '../components/ui/Card'
import Heading from '../components/ui/typography/Heading'
import Paragraph from '../components/ui/typography/Paragraph'

export default {
  components: {
    Logo,
    Card,
    Heading,
    Paragraph,
  },

  data() {
    return {
      filter: null,
      obituaries: [
        {
          id: '123',
          name: 'Ola Nordmann',
          status: 'Aktiv',
          person_information: {
            birthday: '1934.04.23',
            deceased: '2021.04.26',
          },
          funeral_information: {
            church: 'Borge Kirke',
            date: '8. Januar 2021 kl. 10.30',
          },
          bg_image_id:
            'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
          person_image_id:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=jiU6DFBkaq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
          id: '124',
          name: 'Anker Olav Jenssen',
          status: 'Arkivert',
          person_information: {
            birthday: '1934-04-23',
            deceased: '2021-04-26',
          },
          funeral_information: {
            church: 'badb',
            date: 'vsfd',
          },
          bg_image_id:
            'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
          person_image_id:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=jiU6DFBkaq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
          id: '125',
          name: 'bal',
          status: 'Aktiv',
          person_information: {
            birthday: '1934-04-23',
            deceased: '2021-04-26',
          },
          funeral_information: {
            church: 'badb',
            date: 'vsfd',
          },
          bg_image_id:
            'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
          person_image_id:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=jiU6DFBkaq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
      ],
    }
  },
  computed: {
    filterResult() {
      if (this.filter) {
        return this.obituaries.filter((obituary) => {
          return this.filter
            .toLowerCase()
            .split(' ')
            .every((v) => obituary.name.toLowerCase().includes(v))
        })
      } else {
        return this.obituaries
      }
    },
    ...mapGetters('obituaries', ['getPersons']),
  },
  mounted() {},

  methods: {
    updateSearch(e) {
      this.filter = e.target.value
    },
  },
}
</script>
