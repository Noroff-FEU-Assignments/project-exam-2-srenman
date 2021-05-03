<template>
  <overlay>
    <div class="my-3 text-center sm:my-5 border-b">
      <Heading class="mb-5">Registrer deltakelse</Heading>
    </div>
    <div class="px-8">
      <Participant name="Ola Nordmann" />
      <Participant name="Kari Nordmann" />
    </div>
    <div class="px-8 mt-8">
      <Input
        label="Navn"
        placeholder="Fullt navn"
        explanation="Du kan legge til flere deltakere. Trykk på + symbolet for å legge til flere"
      >
        <span slot="before" class="text-gray-400"><users-icon /></span>
        <button slot="after" class="flex p-2">
          <span><plus-icon /></span>Legg til
        </button>
      </Input>
      <Input
        label="Telefonnummer"
        placeholder="+47"
        explanation="Registrer ditt telefonnummer om vi må komme i kontakt med deg."
      >
        <span slot="before" class="text-gray-400"><phone-icon /></span>
      </Input>
    </div>
    <div class="px-8 my-8">
      <p class="text-sm text-gray-700">
        Denne informasjonen blir lagret i 14 dager etter seremonien, for så å
        bli slettet automatisk. Ved behov for bruk i smittesporing, vil en
        rapport om hvem som deltok, samt kontaktnummer bli sendt til gjeldende
        myndigheter. Ved å registrere deg på deltakerlisten aksepterer du til at
        informasjonen behandles ihht. ovenstående.
      </p>
    </div>
    <div class="flex justify-between px-8">
      <SecondaryButton @click="$emit('click')">
        <span slot="text">Avbryt</span>
      </SecondaryButton>
      <PrimaryButton>
        <span slot="icon" class="mr-2"><WriteIcon /></span>
        <span slot="text">Registrer deltakelse</span></PrimaryButton
      >
    </div>
  </overlay>
</template>
<script>
import Overlay from '../ui/Overlay'
import Heading from '../ui/typography/Heading'
import Input from '../ui/form/Input'
import UsersIcon from '../../assets/svg/users.svg?inline'
import PlusIcon from '../../assets/svg/plus.svg?inline'
import PhoneIcon from '../../assets/svg/phone.svg?inline'
import WriteIcon from '../../assets/svg/write.svg?inline'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import SecondaryButton from '../ui/buttons/Secondary'
import Participant from './Participant'

export default {
  components: {
    Overlay,
    Heading,
    Participant,
    Input,
    UsersIcon,
    PlusIcon,
    PhoneIcon,
    WriteIcon,
    PrimaryButton,
    SecondaryButton,
  },
}
</script>
