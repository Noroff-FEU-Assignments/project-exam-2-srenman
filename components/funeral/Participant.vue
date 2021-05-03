<template>
  <div class="flex justify-between py-2 my-2 border-b border-gray-100">
    <p>{{ name }}</p>
    <button>
      <remove-user />
    </button>
  </div>
</template>
<script>
import RemoveUser from '../../assets/svg/removeUser.svg?inline'

export default {
  components: {
    RemoveUser,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
