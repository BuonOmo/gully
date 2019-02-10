<template>
  <detail-layout>
    <h1>Apercu de l'edition 2018</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EPUR9OHktBo" frameborder="0"
            allowfullscreen></iframe>
    <h1>Programmation a venir...</h1>
    <p class="justify">
      D'ici quelques temps, tu trouveras ici la programmation pour les soirées du vendredi
      19 et samedi 20 juillet. Ainsi que toutes les activités durant le festival.
      Pour être le premier au courant, n'hésite pas à suivre
      <a href="https://www.facebook.com/events/2284839384877754/">la page facebook de l'évenement</a>! Et pour toutes
      les infos sur notre asso, c'est <a href="https://www.facebook.com/FestivalGullySound/">ici</a>.
    </p>
    <!--<h1>Vendredi 19 juillet-->
      <!--<nobr>18h-3h30</nobr>-->
    <!--</h1>-->
    <!--<p class="tac">-->
      <!--Programmation à venir...-->
    <!--</p>-->
    <!--&lt;!&ndash;<artist-card :artist="artist" v-for="artist in artists.friday" :key="artist.ref"/>&ndash;&gt;-->
    <!--<h1>Samedi 20 juillet-->
      <!--<nobr>14h-21h</nobr>-->
    <!--</h1>-->
    <!--<p class="tac">-->
      <!--Programmation à venir...-->
    <!--</p>-->
    <!--&lt;!&ndash;<artist-card :artist="artist" v-for="artist in artists.saturdayAM" :key="artist.ref"/>&ndash;&gt;-->
    <!--<h1>Samedi 21 juillet-->
      <!--<nobr>21h-5h</nobr>-->
    <!--</h1>-->
    <!--<p class="tac">-->
      <!--Programmation à venir...-->
    <!--</p>-->
    <!--<artist-card :artist="artist" v-for="artist in artists.saturdayPM" :key="artist.ref"/>-->
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ArtistCard from '../components/ArtistCard.vue'
  import PROG_FILE from '../img/programmation.jpg'
  // import ARTISTS from '../img/artists/index.yml'

  export default {
    data() {
      return {
        progFile: PROG_FILE,
        // artists: ARTISTS
      }
    },

    components: {
      DetailLayout,
      ArtistCard
    }
  }
</script>

<style lang="sass" scoped>
  @import '../palette'

  h1
    background-color: $accent-color
    margin-left: -20px
    margin-right: -20px
    margin-bottom: 40px
    padding: 4px 0
  h1, h1 > nobr
    font-family: title, serif
    font-size: xx-large
    text-align: center

  h1:not(:first-of-type)
    margin-top: 40px

  .tac
    padding-top: 40px
    text-align: center

  .justify
    padding-top: 40px
    text-align: justify
  iframe
    display: block
    margin: auto
    width: 560px
</style>
