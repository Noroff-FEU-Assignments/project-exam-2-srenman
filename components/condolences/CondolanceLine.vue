<template>
  <div class="w-full flex py-4 border-b">
    <div
      class="w-1/3 py-4 pl-8 font-cormorant text-primary-900 flex flex-col justify-center"
    >
      <p class="font-semibold text-xl">{{ author }}</p>
      <p>{{ time }} siden</p>
    </div>
    <div class="py-2 flex flex-col justify-center">
      <p class="font-cormorant italic my-4"><slot /></p>
      <div class="flex">
        <Heart v-if="heart" />
        <Candle v-if="candle" />
      </div>
    </div>
  </div>
</template>
<script>
import Heart from './Heart'
import Candle from './Candle'

export default {
  components: {
    Heart,
    Candle,
  },
  props: {
    author: {
      default: '',
      type: String,
    },
    time: {
      default: '',
      type: String,
    },
    heart: {
      default: false,
      type: Boolean,
    },
    candle: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
