<template>
  <main-layout class="no-top-logo">
    <countdown date="Fri July 21 20:00:00 2017 UTC+2"></countdown>
    <img src="../img/logo.png" class="center-logo">
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Countdown from '../components/Countdown.vue'

  export default {
    components: {
      MainLayout,
      Countdown
    }
  }
</script>

<style lang="sass">
  .center-logo
    display: block
    margin: 3% auto auto
    height: 70%
    @media screen and (orientation: portrait)
      display: block
      margin: 8% auto auto
      height: auto
      width: 80%
</style>