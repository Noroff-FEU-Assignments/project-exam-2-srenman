<template>
  <div>
    <div class="bg-white py-4 px-8 flex justify-between">
      <Heading>Kondolanser</Heading>
      <PrimaryButton @click="AddMessage = true">
        <span slot="icon"><MailIcon /></span>
        <span slot="text" class="ml-2">Legg til hilsen</span></PrimaryButton
      >
    </div>
    <Poem author="Kolbein Falkeid"
      >I livet mitt kom og gikk du som en komet. Ikke at jeg var sola,
      gravitasjonskjempen som holdt deg i stramme og slakke tøyler. Men en slags
      øy I verdenshavet var jeg vel? Du dro forbi med håret for fulle seil, et
      myrullslep av lys på den endeløse blåmyra. Av og til gjorde du strandhogg.
      Det var fint, fint. Men hver gang jeg snudde meg mot deg var du
      borte</Poem
    >
    <div class="bg-white w-10/12 mx-auto mb-20 rounded-lg border">
      <!-- Condolances Here -->
      <CondolanceLine author="Jens Nordmann" time="5 minuter">
        Dette var bare trist
      </CondolanceLine>
      <CondolanceLine
        author="Karianne Johansen"
        time="4 timer"
        heart="true"
        candle="true"
      >
      </CondolanceLine>
      <CondolanceLine author="Kristina Jensen" time="1 dag" candle="true">
        Dette var bare trist. Mange gode minner fra ungdommen. Hvil i fred
      </CondolanceLine>
      <CondolanceLine
        author="Jens Nordmann"
        time="5 minuter"
        heart="true"
        candle="true"
      >
        Dette var bare trist
      </CondolanceLine>
      <CondolanceLine
        author="Karianne Johansen"
        time="4 timer"
        heart="true"
        candle="true"
      >
      </CondolanceLine>
      <CondolanceLine author="Kristina Jensen" time="1 dag" candle="true">
        Dette var bare trist. Mange gode minner fra ungdommen. Hvil i fred
      </CondolanceLine>
    </div>
    <AddMessage v-if="AddMessage" @click="AddMessage = false" />
  </div>
</template>
<script>
import Heading from '../../components/ui/typography/Heading'
import PrimaryButton from '../../components/ui/buttons/PrimaryButton'
import Poem from '../../components/ui/typography/Poem'
import CondolanceLine from '../../components/condolences/CondolanceLine'
import MailIcon from '../../assets/svg/mail.svg?inline'
import AddMessage from '../../components/condolences/AddMessage'

export default {
  components: {
    Heading,
    PrimaryButton,
    Poem,
    CondolanceLine,
    MailIcon,
    AddMessage,
  },
  layout: 'obituary',
  data() {
    return {
      AddMessage: false,
    }
  },
  methods: {},
}
</script>
