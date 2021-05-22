<template>
  <div class="flex items-center">
    <input
      :id="id"
      type="radio"
      :value="value"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    />
    <label :for="id" class="ml-3 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
