<template>
  <detail-layout>
    <h1>Vendredi 20 juillet
      <nobr>20h-3h30</nobr>
    </h1>
    <artist-card :artist="artist" v-for="artist in artists.friday" :key="artist.ref"/>
    <h1>Samedi 21 juillet
      <nobr>14h-20h</nobr>
    </h1>
    <artist-card :artist="artist" v-for="artist in artists.saturdayAM" :key="artist.ref"/>
    <h1>Samedi 21 juillet
      <nobr>20h30-5h</nobr>
    </h1>
    <artist-card :artist="artist" v-for="artist in artists.saturdayPM" :key="artist.ref"/>
    <h1>Sonorisation</h1>
    <artist-card :artist="artists.sonorisation"/>
    <p class="tac">Vous pouvez aussi télécharger le détail de la programmation
      <a :href="progFile" download="Programmation.jpg">ici</a>&nbsp;!</p>
    <h1>Aperçu de l'édition 2017</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/A2awFT8ErS8" frameborder="0"
            allowfullscreen></iframe>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ArtistCard from '../components/ArtistCard.vue'
  import PROG_FILE from '../img/programmation.jpg'
  import ARTISTS from '../img/artists/index.yml'

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

  .tac
    padding-top: 40px
    text-align: center

  iframe
    display: block
    margin: auto
    width: 560px
</style>
