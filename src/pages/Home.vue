<template>
  <main-layout class="no-top-logo">
    <div class="center-logo-ctn">
      <img src="../img/logo.png" class="center-logo">
    </div>
    <countdown :date="date"/>

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Countdown from '../components/Countdown.vue'

  export default {
    components: {
      MainLayout,
      Countdown
    },
    data () {
      return {
        date: new Date("Fri July 16 18:00:00 2020 UTC+2")
      }
    }
  }
</script>

<style lang="sass">
  .center-logo-ctn
    position: absolute
    top: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center

  .center-logo
    width: auto
    height: auto
    max-width: 80%
    max-height: 70%
</style>
