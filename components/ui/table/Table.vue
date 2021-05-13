<template>
  <div>
    <!-- Desktop  -->
    <div class="hidden lg:block flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Avdøde
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Begravelse
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Rediger</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Obituaries-->
                <table-line
                  v-for="obituary in obituaries"
                  :key="obituary.id"
                  :data="obituary"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Phone and tablet -->
    <div class="lg:hidden">
      <horizontal-line
        v-for="obituary in obituaries"
        :key="obituary.id"
        :data="obituary"
      />
    </div>
  </div>
</template>
<script>
import TableLine from '@/components/ui/table/TableLine'
import HorizontalLine from '@/components/ui/table/horizontalLine'

export default {
  components: {
    TableLine,
    HorizontalLine,
  },
  data() {
    return {
      obituaries: [
        {
          id: '123',
          name: 'Ola Nordmann',
          status: 'Aktiv',
          person_information: {
            birthday: '1934.04.23',
            deceased: '2021.04.26',
          },
          funeral_information: {
            church: 'Borge Kirke',
            date: '8. Januar 2021 kl. 10.30',
          },
          person_image_id: 'asd',
        },
        {
          id: '124',
          name: 'Anker Olav Jenssen',
          status: 'Arkivert',
          person_information: {
            birthday: '1934-04-23',
            deceased: '2021-04-26',
          },
          funeral_information: {
            church: 'badb',
            date: 'vsfd',
          },
          person_image_id: 'asd',
        },
        {
          id: '125',
          name: 'bal',
          status: 'Aktiv',
          person_information: {
            birthday: '1934-04-23',
            deceased: '2021-04-26',
          },
          funeral_information: {
            church: 'badb',
            date: 'vsfd',
          },
          person_image_id: 'asd',
        },
      ],
    }
  },
  mounted() {
    console.log(this.obituaries)
  },
}
</script>
