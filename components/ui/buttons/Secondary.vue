<template>
  <button
    type="button"
    class="bg-secondary-300 py-2 px-4 text-white rounded-md hover:bg-secondary-500 text-gray-700 flex items-center"
    @click="$emit('click')"
  >
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>
