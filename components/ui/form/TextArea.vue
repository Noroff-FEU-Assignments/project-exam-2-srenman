<template>
  <div class="">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div class="mt-1">
      <textarea
        :id="id"
        v-model="inputValue"
        :rows="rows"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        class="appearance-none block w-full px-3 py-2 border border-gray-300 input rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
        @keyup="$emit('change', { value: inputValue, dataLocation })"
      >
      </textarea>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    dataLocation: {
      default: '',
      type: String,
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    rows: {
      type: String,
      default: '5',
    },
  },
  data() {
    return {
      inputValue: this.value,
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    },
  },
}
</script>
