<template>
  <div class="flex items-center">
    <input
      id="id"
      name="name"
      type="radio"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    />
    <label for="name" class="ml-3 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
  </div>
</template>
<script>
import { nanoid } from 'nanoid'
export default {
  props: {
    id: {
      type: String,
      default: nanoid(),
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
