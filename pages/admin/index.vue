<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
    <h1 class="text-2xl font-bold text-gray-800 my-6">Aktive oppdrag</h1>
    <Table :persons="persons" />
    <div
      v-if="loading"
      class="absolute inset-0 bg-gray-200 bg-opacity-75 z-50 sm:rounded-lg flex items-center justify-center"
    >
      <Loader class="w-16 mx-auto animate-spin text-gray-500" />
    </div>
  </div>
</template>
<script>
import Table from '@/components/ui/table/Table'
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/assets/svg/loader.svg?inline'

export default {
  components: {
    Table,
    Loader,
  },
  layout: 'admin',
  middleware: ['auth'],
  data() {
    return {
      persons: [],
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      getAdminPersons: 'obituaries/getAdminPersons',
    }),
  },
  mounted() {
    this.displayPersons()
  },

  methods: {
    ...mapActions('obituaries', ['getPersons']),
    async displayPersons() {
      this.loading = true
      const response = await this.getPersons()
      this.persons = response.data
      this.loading = false
    },
  },
}
</script>
