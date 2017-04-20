<template>
  <main-layout>
    <img src="/src/img/logo.png" width="30%">
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
  img {
    display: block;
    margin: auto;
  }
</style>