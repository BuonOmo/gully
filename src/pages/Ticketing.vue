<template>
  <detail-layout>
    <iframe id="haWidget" src="https://www.helloasso.com/associations/artfact/evenements/festival-gully-sound-6-1/widget">
    </iframe>
    <p class="cgv">Vous pouvez retrouver nos conditions générales de ventes
      <a :href="cgvFile" download="CGV.pdf">ici</a>.</p>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import cgvFile from '../resources/CGV.pdf'

  export default {
    data() {
      return {
        cgvFile
      }
    },

    components: {
      DetailLayout
    }
  }
</script>

<style lang="sass" scoped>
  #haWidget
    display: block
    margin: 74px auto auto
    width: 100%
    border: none
    // Height cannot be adjusted automatically. We have to check manually content height to set this value.
    height: 950px

  .cgv
    text-align: center
    padding-top: 8px
</style>