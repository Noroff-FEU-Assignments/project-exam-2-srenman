<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="inline-block bg-white rounded-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:py-6"
      >
        <div class="my-3 text-center sm:my-5 border-b">
          <Heading class="mb-5">Legg til hilsen</Heading>
        </div>
        <div class="px-8">
          <Input label="Navn" placeholder="Ditt navn" />
          <Input label="Epost" placeholder="epost@example.com">
            <span slot="before"><EmailIcon class="text-gray-300" /></span>
          </Input>
          <div class="flex mb-5">
            <SecondaryButton class="mr-4">
              <span slot="icon" class="mr-2"
                ><HeartIcon class="text-pink-500"
              /></span>
              <span slot="text" class="italic font-cormorant"
                >Send et hjerte</span
              >
            </SecondaryButton>
            <SecondaryButton>
              <span slot="icon" class="-mb-2"
                ><CandleIcon class="text-yellow-400"
              /></span>
              <span slot="text" class="italic font-cormorant -ml-1"
                >Tend et lys</span
              >
            </SecondaryButton>
          </div>
          <TextArea label="Hilsen" placeholder="Valgfritt" />
          <FileUpload />
          <div class="flex justify-between">
            <SecondaryButton @click="$emit('click')">
              <span slot="text">Avbryt</span>
            </SecondaryButton>
            <PrimaryButton>
              <span slot="icon"><WriteIcon /></span>
              <span slot="text">Send inn hilsen</span></PrimaryButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from '../ui/typography/Heading'
import Input from '../ui/form/Input'
import EmailIcon from '../../assets/svg/mail.svg?inline'
import HeartIcon from '../../assets/svg/heart.svg?inline'
import CandleIcon from '../../assets/svg/candle.svg?inline'
import WriteIcon from '../../assets/svg/write.svg?inline'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import SecondaryButton from '../ui/buttons/Secondary'
import TextArea from '../ui/form/TextArea'
import FileUpload from '../ui/form/FileUpload'

export default {
  components: {
    Heading,
    Input,
    EmailIcon,
    HeartIcon,
    CandleIcon,
    WriteIcon,
    PrimaryButton,
    SecondaryButton,
    TextArea,
    FileUpload,
  },
}
</script>
