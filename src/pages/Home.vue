<template>
  <main-layout class="no-top-logo">
    <img src="/src/img/logo.png" width="42%" class="center-logo">
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>

<style>
  .center-logo {
    display: block;
    margin: 7% auto auto;
  }
</style>