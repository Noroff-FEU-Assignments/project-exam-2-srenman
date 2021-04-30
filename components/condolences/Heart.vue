<template>
  <div class="flex mr-4">
    <HeartIcon class="text-pink-500" />
    <p class="font-cormorant italic ml-2">Sendte ett hjerte</p>
  </div>
</template>
<script>
import HeartIcon from '../../assets/svg/heart.svg?inline'

export default {
  components: {
    HeartIcon,
  },
}
</script>
