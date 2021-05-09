<template>
  <nuxt-link
    :to="linkPath"
    class="bg-indigo-500 py-2 px-4 text-white rounded-md hover:bg-indigo-700 flex items-center"
    type="button"
    @click="$emit('click')"
  >
    <slot name="text"></slot>
    <slot name="icon"></slot>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    linkPath: {
      type: String,
      default: '',
    },
  },
  methods: {},
}
</script>
