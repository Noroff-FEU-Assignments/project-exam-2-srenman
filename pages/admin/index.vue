<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
    <h1 class="text-2xl font-bold text-gray-800 my-6">Aktive oppdrag</h1>
    <Table />
  </div>
</template>
<script>
import Table from '@/components/ui/table/Table'
import { mapActions } from 'vuex'

export default {
  components: {
    Table,
  },
  layout: 'admin',

  methods: {
    ...mapActions(['registerTenant']),
  },
}
</script>
