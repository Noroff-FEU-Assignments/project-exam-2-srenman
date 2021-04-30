<template>
  <div class="mx-auto my-12 max-w-sm">
    <p class="font-cormorant italic text-xl leading-loose">
      <slot />
    </p>
    <p class="font-cormorant text-2xl font-medium leading-loose mt-2">
      {{ author }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    author: {
      default: '',
      type: String,
    },
  },
}
</script>
