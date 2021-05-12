<template>
  <div>
    <div class="p-4 bg-white rounded-md">
      <div class="flex justify-between items-center border-b pb-2">
        <div>
          <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
          <div class="text-sm text-gray-500">jane.cooper@example.com</div>
        </div>
        <a href="#" class="text-indigo-600 hover:text-indigo-900 pr-2">Edit</a>
      </div>

      <div class="text-sm text-gray-900 pt-2">Regional Paradigm Technician</div>
      <div class="text-sm text-gray-500">Optimization</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
}
</script>
