<template>
  <detail-layout>
    <h1>Vendredi 21 juillet
      <nobr>20h-3h</nobr>
    </h1>
    <div class="card-container">
      <artist-card :artist="artist" v-for="artist in artists.friday" :key="artist.ref">
      </artist-card>
    </div>
    <h1>Samedi 22 juillet
      <nobr>12h-19h</nobr>
    </h1>
    <div class="card-container">
      <artist-card :artist="artist" v-for="artist in artists.saturdayAM" :key="artist.ref">
      </artist-card>
    </div>
    <h1>Samedi 22 juillet
      <nobr>20h-5h</nobr>
    </h1>
    <div class="card-container">
      <artist-card :artist="artist" v-for="artist in artists.saturdayPM" :key="artist.ref">
      </artist-card>
    </div>
    <p class="tac">Vous pouvez aussi télécharger le détail de la programmation
      <a :href="progFile" download="Programmation.jpg">ici</a>&nbsp;!</p>
    <h1>Aperçu de l'édition 2016</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IJFo8U2U7SQ" frameborder="0"
            allowfullscreen></iframe>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ArtistCard from '../components/ArtistCard.vue'
  import PROG_FILE from '../img/programmation.jpg'
  import ARTISTS from '../resources/artists.yml'

  export default {
    data() {
      return {
        progFile: PROG_FILE,
        artists: ARTISTS
      }
    },

    components: {
      DetailLayout,
      ArtistCard
    }
  }
</script>

<style lang="sass" scoped>
  h1, h1 > nobr
    font-family: title, serif
    font-size: xx-large
    text-align: center

  h1:not(:first-of-type)
    padding-top: 80px

  .card-container
    padding-top: 20px
    display: flex
    justify-content: space-around
    flex-wrap: wrap

  .tac
    padding-top: 40px
    text-align: center

  iframe
    display: block
    margin: auto
    width: 560px
</style>
