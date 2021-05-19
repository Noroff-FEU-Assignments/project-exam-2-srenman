<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <SidebarDesktop />
    <SidebarMobile />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <Topbar />
      <div class="relative">
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-class="transform opacity-0"
          enter-to-class="transform opacity-100 "
          leave-active-class="transition ease-in duration-75"
          leave-class="transform opacity-100"
          leave-to-class="transform opacity-0"
        >
        </transition>
      </div>

      <main
        class="flex-1 relative overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div>
          <!-- Replace with your content -->
          <Nuxt />
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Topbar from '@/components/layout/Topbar'
import SidebarDesktop from '@/components/sidebar/Desktop'
import SidebarMobile from '@/components/sidebar/Mobile'

export default {
  components: {
    Topbar,
    SidebarDesktop,
    SidebarMobile,
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
