<template>
  <main-layout>
    <p>La page que tu cherches n'existe pas, viens plutôt voir la <v-link href="/programmation">programmation</v-link> !</p>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      MainLayout,
      VLink
    }
  }
</script>

<style scoped>
  p {
    margin: 30% auto auto;
    display: block;
    max-width: 600px;
  }
</style>