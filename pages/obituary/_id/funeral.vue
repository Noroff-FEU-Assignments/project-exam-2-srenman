<template>
  <div>
    <div class="bg-white py-4 px-8 flex justify-between">
      <Heading>Begravelse</Heading>
    </div>

    <div class="bg-white w-10/12 mx-auto my-16 rounded-lg border p-4">
      <h3 class="uppercase text-gray-700 font-medium pb-4">Begravelse</h3>
      <div class="flex">
        <div class="flex-1">
          <div class="flex mb-4">
            <div class="mr-2">
              <LocationIcon class="text-gray-500" />
            </div>
            <div>
              <p>Fra {{ person.funeral_information.church }}</p>
              <p>til {{ person.funeral_information.cementary }}</p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-2">
              <CalendarIcon class="text-gray-500" />
            </div>
            <div>{{ person.funeral_information.date }}</div>
          </div>
        </div>
        <div class="flex-1">
          <div>
            <div class="flex mb-4">
              <div class="mr-2">
                <InformationIcon class="text-blue-500" />
              </div>
              <div>
                Grunnet begrensning i antall deltakere som kan være tilstede i
                seremonien, ber vi om at du registrerer din deltakelse her.
              </div>
            </div>
            <div class="flex">
              <div class="mr-2">
                <VideoIcon class="text-pink-500" />
              </div>
              <div>Seremonien vil også sendes direkte på denne siden.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex">
        <PrimaryButton class="mr-4" @click="RegisterAttendance = true">
          <span slot="icon" class="mr-2"><WriteIcon /></span>
          <span slot="text"> Registrer din deltakelse</span></PrimaryButton
        >
        <PrimaryLink link="https://www.leknesblomster.no/">
          <span slot="icon" class="mr-2"><ExitIcon class="text-white" /></span>
          <span slot="text">Bestill blomster</span>
        </PrimaryLink>
      </div>
    </div>
    <RegisterAttendance
      v-if="RegisterAttendance"
      @click="RegisterAttendance = false"
    />
  </div>
</template>
<script>
import Heading from '@/components/ui/typography/Heading'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import LocationIcon from '@/assets/svg/location.svg?inline'
import CalendarIcon from '@/assets/svg/calendar.svg?inline'
import InformationIcon from '@/assets/svg/information.svg?inline'
import VideoIcon from '@/assets/svg/video.svg?inline'
import WriteIcon from '@/assets/svg/write.svg?inline'
import ExitIcon from '@/assets/svg/exitPage.svg?inline'
import RegisterAttendance from '@/components/funeral/RegisterAttendance'
import PrimaryLink from '@/components/ui/buttons/PrimaryLink'
import { mapGetters } from 'vuex'

export default {
  components: {
    Heading,
    PrimaryButton,
    LocationIcon,
    CalendarIcon,
    InformationIcon,
    VideoIcon,
    WriteIcon,
    ExitIcon,
    RegisterAttendance,
    PrimaryLink,
  },
  layout: 'obituary',

  data() {
    return {
      RegisterAttendance: false,

      person: {},
    }
  },
  computed: {
    ...mapGetters({
      getCurrentPerson: 'obituaries/getCurrentPerson',
    }),
  },
}
</script>
