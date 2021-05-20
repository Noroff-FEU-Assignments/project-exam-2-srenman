<template>
  <div
    class="flex flex-col flex-initial w-80 m-4 rounded-lg shadow-lg overflow-hidden"
  >
    <div class="flex-shrink-0 relative">
      <img
        class="h-48 w-full object-cover"
        :src="data.bg_image_id"
        alt="Bakgrundsbilde"
      />
      <img
        class="h-44 w-44 rounded-full absolute top-2 left-16 object-cover"
        :src="data.person_image_id"
        alt="Portrett"
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1 text-center">
        <nuxt-link :to="`/obituary/${data.id}`" class="block mt-2">
          <h2 class="text-md font-medium text-gray-900">
            {{ data.name }}
          </h2>
          <h3 class="text-md text-gray-500">
            {{ data.funeral_information.birthday }} -
            {{ data.funeral_information.deceasedDate }}
          </h3>
          <p class="my-3 text-base text-gray-500">
            Begravelse fra {{ data.funeral_information.church }}
            {{ data.funeral_information.date }}
          </p>
        </nuxt-link>
      </div>
    </div>
    <div class="flex bg-white items-center border border-t">
      <nuxt-link
        :to="`/obituary/${data.id}/funeral`"
        class="w-full flex items-center justify-center py-4 border-r hover:bg-primary-100"
      >
        <AddUser class="text-gray-400" />
        <p class="text-sm ml-2 text-center font-medium text-gray-700">
          Påmelding
        </p>
      </nuxt-link>
      <nuxt-link
        :to="`/obituary/${data.id}`"
        class="w-full flex items-center justify-center py-4 hover:bg-primary-100"
      >
        <WriteIcon class="text-gray-400" />
        <p class="text-sm ml-2 text-center font-medium text-gray-700">
          <nuxt-link :to="`/obituary/${data.id}`">Skriv hilsen</nuxt-link>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import WriteIcon from '../../assets/svg/write.svg?inline'
import AddUser from '../../assets/svg/addUser.svg?inline'

export default {
  components: {
    WriteIcon,
    AddUser,
  },
  props: {
    data: {
      type: [String, Object, Array],
      default: '',
    },
  },
}
</script>
