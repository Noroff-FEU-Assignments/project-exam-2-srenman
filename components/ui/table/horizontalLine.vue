<template>
  <div>
    <div class="p-4 bg-white rounded-md mb-4">
      <div class="flex justify-between items-center border-b pb-2">
        <div>
          <div class="text-sm font-medium text-gray-900">{{ data.name }}</div>
          <div class="text-sm text-gray-500">
            {{ data.person_information.birthday }} -
            {{ data.person_information.deceased }}
          </div>
        </div>
        <a href="#" class="text-indigo-600 hover:text-indigo-900 pr-2">Edit</a>
      </div>
      <div class="flex justify-between">
        <div>
          <div class="text-sm text-gray-900 pt-2">
            {{ data.funeral_information.date }}
          </div>
          <div class="text-sm text-gray-500">
            {{ data.funeral_information.church }}
          </div>
        </div>
        <div class="py-4 whitespace-nowrap">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          >
            {{ data.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>
