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
              <p>Fra Borge Kirke</p>
              <p>til Vik Kirkegård</p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-2">
              <CalendarIcon class="text-gray-500" />
            </div>
            <div>8. januar 2021 kl 10.30</div>
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
      <div class="mt-6">
        <PrimaryButton>Registrer din deltakelse</PrimaryButton>
        <PrimaryButton>Bestill blomster</PrimaryButton>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from '../../components/ui/typography/Heading'
import PrimaryButton from '../../components/ui/buttons/PrimaryButton'
import LocationIcon from '../../assets/svg/location.svg?inline'
import CalendarIcon from '../../assets/svg/calendar.svg?inline'
import InformationIcon from '../../assets/svg/information.svg?inline'
import VideoIcon from '../../assets/svg/video.svg?inline'

export default {
  components: {
    Heading,
    PrimaryButton,
    LocationIcon,
    CalendarIcon,
    InformationIcon,
    VideoIcon,
  },
  layout: 'obituary',
}
</script>
