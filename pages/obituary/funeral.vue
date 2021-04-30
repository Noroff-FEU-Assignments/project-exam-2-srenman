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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p>Fra Borge Kirke</p>
              <p>til Vik Kirkegård</p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>8. januar 2021 kl 10.30</div>
          </div>
        </div>
        <div class="flex-1">
          <div>
            <div class="flex mb-4">
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                Grunnet begrensning i antall deltakere som kan være tilstede i
                seremonien, ber vi om at du registrerer din deltakelse her.
              </div>
            </div>
            <div class="flex">
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
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

export default {
  components: {
    Heading,
    PrimaryButton,
  },
  layout: 'obituary',
}
</script>
