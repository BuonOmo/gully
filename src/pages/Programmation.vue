<template>
  <detail-layout>
    <h1>Apercu de l'edition 2019</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/orJTg2nTRrw" frameborder="0"
    allowfullscreen></iframe>

     <h1>Programmation a venir...</h1>
    <p class="justify">
    D'ici quelques temps, tu trouveras ici la programmation pour les soirées du jeudi 16, vendredi
    17 et samedi 18 juillet. Ainsi que toutes les activités durant le festival.
    Pour être le premier au courant, n'hésite pas à suivre
    <a href="https://www.facebook.com/events/1411526555671778/">la page facebook de l'évenement</a>! Et pour toutes
    les infos sur notre asso, c'est <a href="https://www.facebook.com/FestivalGullySound/">ici</a>.
    </p>
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

  $separator-width: 30px

  @media only screen and (max-device-width: 480px)
    .moon-race-battle
      width: 78vw
      margin: 10px

  .artists
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    @media only screen and (max-device-width: 480px)
      flex-direction: column
    @media only screen and (min-device-width: 480px)
      &.max-two
        max-width: 550px
        margin: 0 auto

  .artist-separation
    $image-width: 22px
    background-image: url('../img/tree.png')
    margin: 0 ($separator-width - $image-width) / 2
    width: $image-width
    height: 1.68 * $image-width
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    display: block
    &.small-only
      display: none
    @media only screen and (max-device-width: 480px)
      $image-height: 80px
      height: $image-height
      width: $image-height / 1.68
      &.small-only
        display: block

  .artist-relation
    margin: 20px 0
    width: $separator-width
    font-family: title, serif
    text-align: center
    @media only screen and (max-device-width: 480px)
      font-size: 3.4em
      width: auto

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
