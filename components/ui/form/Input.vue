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
          @keyup="$emit('change', { value: inputValue, dataLocation })"
        />
        <div v-if="iconAfter" class="px-2">
          <slot name="after"></slot>
        </div>
      </div>
      <p v-if="explanation" class="text-sm text-gray-500 pt-2">
        {{ explanation }}
      </p>
      <p v-if="error" id="error" class="mt-2 text-sm text-red-600">
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
      default: false,
      type: Boolean,
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
