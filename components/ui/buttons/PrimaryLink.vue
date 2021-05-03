<template>
  <a
    :href="link"
    target="”_blank”"
    class="bg-primary-500 py-2 px-4 text-white rounded-md hover:bg-primary-700 flex items-center"
    type="button"
    @click="$emit('click')"
  >
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </a>
</template>
<script>
export default {
  props: {
    link: {
      default: '#',
      type: String,
    },
  },
  methods: {},
}
</script>
