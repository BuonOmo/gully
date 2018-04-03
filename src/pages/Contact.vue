<template>
  <detail-layout>
    <p class="tac">
      Pour demander des informations, venir jouer au Gully Sound, devenir bénévole ou pour toutes autres
      demandes, contactez-nous !
    </p>
    <p class="tac">
      <a href="mailto:asso.artfact@gmail.com">asso.artfact@gmail.com</a>
    </p>
    </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'

  export default {
    components: {
      DetailLayout
    }
  }
</script>

<style lang="sass" scoped>
  p.tac
    text-align: center
</style>