<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 my-6">Aktive oppdrag</h1>
    <Table />
  </div>
</template>
<script>
import Table from '@/components/ui/table/Table'
export default {
  components: {
    Table,
  },
  layout: 'admin',
}
</script>
