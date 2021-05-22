<template>
  <div class="flex items-center space-x-2 mb-6">
    <div class="w-full">
      <label
        v-if="label"
        :for="id"
        class="block text-sm font-medium text-gray-700"
      >
        {{ label }}
      </label>
      <label v-if="srLabel" for="id" class="sr-only">{{ srLabel }}</label>
      <div
        class="block w-full bg-white sm:text-sm border border-gray-300 rounded-md shadow-sm flex justify-between items-center"
      >
        <div v-if="iconBefore" class="pl-2">
          <slot name="before"></slot>
        </div>
        <input
          :id="id"
          v-model="inputValue"
          class="px-3 py-2 rounded-md flex-grow border-none focus:ring-none focus:outline-none"
          :name="name"
          :placeholder="placeholder"
          :type="type"
          autocomplete="false"
          :required="required"
          :value="value"
          @keyup="$emit('change', { value: inputValue, dataLocation })"
        />
        <div v-if="iconAfter" class="px-2">
          <slot name="after"></slot>
        </div>
        <div
          v-if="error"
          class="inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <!-- Heroicon name: exclamation-circle -->
          <svg
            class="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <p v-if="explanation" class="text-sm text-gray-500 pt-2">
        {{ explanation }}
      </p>
      <p v-if="error" id="email-error" class="mt-2 text-sm text-red-600">
        {{ error }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    srLabel: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    explanation: {
      type: String,
      default: '',
    },
    error: {
      default: '',
      type: String,
    },
    dataLocation: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.value,
    }
  },

  computed: {
    iconBefore() {
      return !!this.$slots.before
    },
    iconAfter() {
      return !!this.$slots.after
    },
  },
  watch: {
    value() {
      this.inputValue = this.value
    },
  },
}
</script>
