<template>
  <detail-layout>
    <iframe id="haWidget" src="https://www.helloasso.com/associations/artfact/evenements/festival-gully-sound-5/widget">
    </iframe>
    <p class="cgv">Vous pouvez retrouver nos conditions générales de ventes
      <a :href="cgvFile" download="Conditions-générales-de-vente Gully 5.pdf">ici</a>.</p>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import CGV from '../resources/CGV.pdf'

  export default {
    data() {
      return {
        cgvFile: CGV
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
    height: 1200px

  .cgv
    text-align: center
    padding-top: 30px
</style>