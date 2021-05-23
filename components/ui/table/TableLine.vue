<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            v-if="data.person_image_id === null"
            class="h-10 w-10 rounded-full object-cover"
            src="../../../assets/img/simple-avatar.png"
            alt="Portrett"
          />
          <img
            v-else
            class="h-10 w-10 rounded-full object-cover"
            :src="data.person_image_id"
            alt="Portrett"
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
    <!--
      To be implemented in future
       <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ data.status }}
      </span>
    </td> -->

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
