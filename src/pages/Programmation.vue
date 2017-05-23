<template>
  <detail-layout>
    <div class="card-container">
      <artist-card :name="artist" v-for="artist in artists"></artist-card>
    </div>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ArtistCard from '../components/ArtistCard.vue'

  export default {
    data() {
      return {
        artists: ["Atomic", "Blazeup", "Brainlesse", "Conquering sound", "dreadsqaud", "missah et weedo",
          "ragga youth posse", "rakoon", "red rockers", "Skankin", "soom t 2"]
      }
    },

    components: {
      DetailLayout,
      ArtistCard
    }
  }
</script>

<style lang="sass" scoped="programmation">
  .card-container
    padding-top: 20px
    display: flex
    justify-content: space-around
    flex-wrap: wrap
</style>