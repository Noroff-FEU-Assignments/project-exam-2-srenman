<template>
  <div class="ml-3 relative z-30">
    <div>
      <button
        id="user-menu"
        type="button"
        class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded="false"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="../../../assets/img/logo.png"
          alt=""
        />
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="visible"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          >Settings</a
        >
        <button
          class="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100"
          role="menuitem"
          @click="logout"
        >
          Sign out
        </button>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  data() {
    return {
      visible: false,
    }
  },
  mounted() {},
  methods: {
    toggleDropdown() {
      this.visible = !this.visible
    },
    ...mapActions({ logout: 'auth/logout' }),
  },
}
</script>
