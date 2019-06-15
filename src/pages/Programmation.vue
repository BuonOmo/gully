<template>
  <detail-layout>
    <h1>Vendredi 19 juillet
      <nobr>18h-4h</nobr>
    </h1>
    <div class="artists">
      <!--(Ubrown) meets (Red rockers Live band) and (Vesper T)-->
      <!--(Art-X) sapin (Bisou) sapin (Rumbo Tumba)-->
      <!--(Dj little tune) sapin (Skank'in Sound) feat (Ranking Diximal and Mc Akro)-->
      <artist-card></artist-card>
      <span class="artist-relation">meets</span>
      <artist-card></artist-card>
      <span class="artist-relation">and</span>
      <artist-card></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-relation">feat</span>
      <artist-card></artist-card>
    </div>

    <h1>Samedi 20 juillet
      <nobr>12h-21h30</nobr>
    </h1>
    <!--(High Garden Sound) sapin (Ras Divarius)-->
    <!--(Mouvement Dancer'z) with (Blaze Up Sound)-->
    <div class="artists max-two">
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card></artist-card>
      <span class="artist-relation">with</span>
      <artist-card></artist-card>
    </div>

    <h1>Samedi 21 juillet
      <nobr>21h-5h</nobr>
    </h1>
    <!--(grosse photo que tu appelles "Moon Race Battle / Sound clash)-->
    <!--(Afu-Ra feat Digital Cut) sapin (Mahom)-->
    <!--(Dubamix) sapin (Ackee Saltfish)-->
    <div class="artists max-two">
      <artist-card wide></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
    </div>

    <h1>Sonorisation</h1>
    <!--(Red Rockers Sound) sapin (High Garden Sound) sapin (Amahoro Sound)-->
    <div class="artists">
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
      <span class="artist-separation"></span>
      <artist-card></artist-card>
    </div>


    <h1>Apercu de l'edition 2018</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EPUR9OHktBo" frameborder="0"
    allowfullscreen></iframe>
    <!--<h1>Programmation a venir...</h1>-->
    <!--<p class="justify">-->
    <!--D'ici quelques temps, tu trouveras ici la programmation pour les soirées du vendredi-->
    <!--19 et samedi 20 juillet. Ainsi que toutes les activités durant le festival.-->
    <!--Pour être le premier au courant, n'hésite pas à suivre-->
    <!--<a href="https://www.facebook.com/events/2284839384877754/">la page facebook de l'évenement</a>! Et pour toutes-->
    <!--les infos sur notre asso, c'est <a href="https://www.facebook.com/FestivalGullySound/">ici</a>.-->
    <!--</p>-->
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
      &.small-only
        display: block

  .artist-relation
    margin: 20px 0
    width: $separator-width
    font-family: title, serif
    text-align: center

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
