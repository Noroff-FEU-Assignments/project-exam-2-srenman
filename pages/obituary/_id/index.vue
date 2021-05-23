<template>
  <div>
    <div class="bg-white py-4 px-8 flex justify-between">
      <Heading>Kondolanser</Heading>
      <PrimaryButton @click="AddMessage = true">
        <span slot="icon"><MailIcon /></span>
        <span slot="text" class="ml-2">Legg til hilsen</span></PrimaryButton
      >
    </div>
    <Poem v-if="poem" :author="person.funeral_information.poemAuthor">
      {{ funeral.poemText }}
    </Poem>
    <div class="bg-white w-10/12 mx-auto my-20 rounded-lg border">
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
import Heading from '@/components/ui/typography/Heading'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import Poem from '@/components/ui/typography/Poem'
import CondolanceLine from '@/components/condolences/CondolanceLine'
import MailIcon from '@/assets/svg/mail.svg?inline'
import AddMessage from '@/components/condolences/AddMessage'
import { mapActions } from 'vuex'

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
      person: {},
      funeral: {},
    }
  },

  beforeMount() {
    this.displayPerson()
  },

  methods: {
    ...mapActions('obituaries', ['getPersonById']),
    async displayPerson() {
      this.loading = true
      const response = await this.getPersonById(this.$route.params.id)
      this.person = response.data
      this.funeral = response.data.funeral_information
      this.loading = false
    },
  },
}
</script>
