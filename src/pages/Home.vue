<template>
  <main-layout class="no-top-logo">
    <countdown date="Fri July 21 20:00:00 2017 UTC+2"></countdown>
    <img src="../img/logo.png" height="60%" class="center-logo">
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

<style>
  .center-logo {
    display: block;
    margin: 7% auto auto;
  }
</style>