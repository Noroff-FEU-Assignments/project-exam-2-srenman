<template>
  <div
    class="flex flex-col flex-initial w-80 m-4 rounded-lg shadow-lg overflow-hidden"
  >
    <div class="flex-shrink-0 relative">
      <img
        class="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        alt=""
      />
      <img
        class="h-44 w-44 rounded-full absolute top-2 left-16 object-cover"
        src="https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        alt="Portrait"
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1 text-center">
        <a href="#" class="block mt-2">
          <h2 class="text-md font-medium text-gray-900">
            Karl Olav Anker Johansen
          </h2>
          <h3 class="text-md text-gray-500">1.4.1928 - 23.12.2020</h3>
          <p class="my-3 text-base text-gray-500">
            Begravelse fra Borge Kirke fredag 8. januar 2021
          </p>
        </a>
      </div>
    </div>
    <div class="flex bg-white items-center border border-t">
      <a
        href="#"
        class="w-full flex items-center justify-center py-4 border-r hover:bg-primary-100"
      >
        <AddUser class="text-gray-400" />
        <p class="text-sm ml-2 text-center font-medium text-gray-700">
          Påmelding
        </p>
      </a>
      <a
        href="#"
        class="w-full flex items-center justify-center py-4 hover:bg-primary-100"
      >
        <Write class="text-gray-400" />
        <p class="text-sm ml-2 text-center font-medium text-gray-700">
          <a href="#"> Skriv hilsen</a>
        </p>
      </a>
    </div>
  </div>
</template>
<script>
import Write from '../../assets/svg/Write'
import AddUser from '../../assets/svg/AddUser'

export default {
  components: {
    Write,
    AddUser,
  },
}
</script>
