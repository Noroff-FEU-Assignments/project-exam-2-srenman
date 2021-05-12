<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=jiU6DFBkaq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{ data.name }}</div>
          <div class="text-sm text-gray-500">
            {{ data.person_information.birthday }} -
            {{ data.person_information.deceased }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ data.funeral_information.date }}
      </div>
      <div class="text-sm text-gray-500">
        {{ data.funeral_information.church }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        Aktiv
      </span>
    </td>

    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <nuxt-link
        :to="`/admin/obituary/${data.id}`"
        class="text-indigo-600 hover:text-indigo-900"
        >Rediger</nuxt-link
      >
    </td>
  </tr>
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
