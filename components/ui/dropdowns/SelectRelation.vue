<template>
  <div class="z-10 my-4">
    <label
      v-if="label"
      id="listbox-label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div class="mt-1 relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="bg-white relative w-full border border-gray-300 rounded-md -mt-1 shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-none focus:border-none sm:text-sm"
        @click="toggleDropdown"
      >
        <span class="block truncate">Barn</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
        >
          <ChevronDown class="text-gray-900" />
        </span>
      </button>
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
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg min-w-min"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <li
              role="option"
              class="text-gray-900 cursor-default select-none bg-white hover:bg-gray-100 relative py-2 pl-3 pr-9 z-20"
              @click="selectOption"
            >
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="font-normal block truncate"> Barn </span>
            </li>
            <li
              role="option"
              class="text-gray-900 cursor-default select-none bg-white hover:bg-gray-100 relative py-2 pl-3 pr-9 z-20"
              @click="selectOption"
            >
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="font-normal block truncate"> Partner </span>
            </li>

            <li
              role="option"
              class="text-gray-900 cursor-default select-none bg-white hover:bg-gray-100 relative py-2 pl-3 pr-9 z-20"
              @click="selectOption"
            >
              <span class="font-normal block truncate">Søsken </span>
            </li>
            <li
              role="option"
              class="text-gray-900 cursor-default select-none bg-white hover:bg-gray-100 relative py-2 pl-3 pr-9 z-20"
              @click="selectOption"
            >
              <span class="font-normal block truncate">Forelder </span>
            </li>
            <li
              role="option"
              class="text-gray-900 cursor-default select-none bg-white hover:bg-gray-100 relative py-2 pl-3 pr-9 z-20"
              @click="selectOption"
            >
              <span class="font-normal block truncate">Venn </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import ChevronDown from '@/assets/svg/chevronDown.svg?inline'
export default {
  components: {
    ChevronDown,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
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
    selectOption() {
      this.toggleDropdown()
    },
  },
}
</script>
