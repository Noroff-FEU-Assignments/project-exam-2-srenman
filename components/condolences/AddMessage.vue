<template>
  <Overlay>
    <div class="my-3 text-center sm:my-5 border-b">
      <Heading class="mb-5">Legg til hilsen</Heading>
    </div>
    <form class="px-8">
      <Input id="name" name="name" label="Navn" placeholder="Ditt navn" />
      <Input
        id="mail"
        name="mail"
        label="Epost"
        placeholder="epost@example.com"
      >
        <span slot="before"><EmailIcon class="text-gray-300" /></span>
      </Input>
      <div class="flex mb-5">
        <SecondaryButton class="mr-4">
          <span slot="icon" class="mr-2"
            ><HeartIcon class="text-pink-500"
          /></span>
          <span slot="text" class="italic font-cormorant">Send et hjerte</span>
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
    </form>
  </Overlay>
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
import Overlay from '../ui/Overlay.vue'

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
    Overlay,
  },
}
</script>
