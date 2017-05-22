<template>
  <detail-layout>
    <iframe id="haWidget" src="https://www.helloasso.com/associations/artfact/evenements/festival-gully-sound-5/widget">
    </iframe>
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

<style lang="sass">
  #haWidget
    display: block
    margin: 74px auto auto
    width: 100%
    border: none
    height: 1200px
</style>