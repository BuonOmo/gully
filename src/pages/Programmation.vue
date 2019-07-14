<template>
  <detail-layout>
    <h1>Vendredi 19 juillet
      <nobr>18h-4h</nobr>
    </h1>
    <div class="artists">
      <!--(Ubrown) meets (Red rockers Live band) and (Vesper T)-->
      <!--(Art-X) sapin (Bisou) sapin (Rumbo Tumba)-->
      <!--(Dj little tune) sapin (Skank'in Sound) feat (Ranking Diximal and Mc Akro)-->
      <artist-card
        name="U Brown"
        description="Reggae, live band"
        :links="['https://www.facebook.com/UBrownOfficial', 'https://www.youtube.com/watch?v=ifo4i7743NY']"
      ></artist-card>
      <span class="artist-relation">meets</span>
      <artist-card
        name="Red Rockers"
        description="Reggae, live band"
        :links="['https://www.facebook.com/redrockers69/', 'https://www.youtube.com/watch?v=hSO20whjRaw']"
      ></artist-card>
      <span class="artist-relation">and</span>
      <artist-card
        name="Vesper T"
        description="Reggae, live band"
        :links="['https://www.facebook.com/MairaVesperti/']"
      ></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card
        name="Art-X"
        description="Dub, Digital, melodica"
        :links="['https://www.facebook.com/artxmelodica/', 'https://www.youtube.com/watch?v=TmwNGl2Az1E']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Bisou"
        description="Dub électro"
        :links="['https://www.facebook.com/BisouLive/', 'https://www.youtube.com/watch?v=6seQL8ZthmY']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Rumbo Tumba"
        description="Digital instrumental <br> Folklore argentin"
        :links="['https://www.facebook.com/RUMBOTUMBA/', 'https://www.youtube.com/watch?v=oG2Trs2zTao']"
      ></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card
        name="Dj Little Tune"
        description="Balkan, Electro swing…"
        :links="['https://www.facebook.com/DjLittleTune/', 'https://www.youtube.com/watch?v=Bu7DcF2WDGc']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Skank'in Sound"
        description="Rub a dub, digital"
        :links="['https://www.facebook.com/Skankin-sound-586034284751871/', 'https://youtu.be/Lt08iezQNJ0?t=274']"
      ></artist-card>
      <span class="artist-relation">feat</span>
      <artist-card
        name="Ranking Diximal <br> & Mc Akro"
        description="Raggamuffin"
        :links="['https://www.facebook.com/ranking.diximal', 'https://www.facebook.com/mc.akrow', 'https://soundcloud.com/mc-akro']"
      ></artist-card>
    </div>

    <h1>Samedi 20 juillet
      <nobr>12h-21h30</nobr>
    </h1>
    <!--(High Garden Sound) sapin (Ras Divarius)-->
    <!--(Mouvement Dancer'z) with (Blaze Up Sound)-->
    <div class="artists max-two">
      <artist-card
        name="High Garden Sound"
        description="Sound System"
        :links="['https://www.facebook.com/highgardensoundsystem/']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Ras Divarius"
        description="Violon, dub"
        :links="['https://www.facebook.com/rasdivarius/', 'https://www.youtube.com/watch?v=CLZZRROMVnM']"
      ></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card
        name="Mouvement Dancer'z"
        description="Initiation / <br> Show Dancehall"
        :links="['https://www.facebook.com/MouvMentDancerz/', 'https://youtu.be/flmk0qJZ8m8']"
      ></artist-card>
      <span class="artist-relation">with</span>
      <artist-card
        name="Blaze Up Sound"
        description="Roots to dancehall"
        :links="['https://www.facebook.com/Blaze-Up-Sound-184063975471691/', 'https://www.youtube.com/watch?v=OeB_DbFM4H4']"
      ></artist-card>
    </div>

    <h1>Samedi 20 juillet
      <nobr>21h-6h</nobr>
    </h1>
    <!--(grosse photo que tu appelles "Moon Race Battle / Sound clash)-->
    <!--(Afu-Ra feat Digital Cut) sapin (Mahom)-->
    <!--(Dubamix) sapin (Ackee Saltfish)-->
    <div class="artists max-two">
      <img
        width="530"
        class="moon-race-battle"
        src="https://res.cloudinary.com/gully/image/upload/c_fit,w_530/moon_race_battle"
        alt="Moon Race Battle"
      >
      <span class="artist-separation small-only"></span>
      <artist-card
        name="Afu-Ra / Digital Cut"
        description="Rap, Hip-hop"
        :links="['https://www.facebook.com/realafu/', 'https://www.facebook.com/Digitalcutmusic/', 'https://www.youtube.com/watch?v=dMVVie9uX8I']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Mahom"
        description="Dub stepper"
        :links="['https://www.facebook.com/mahomdubofficiel/', 'https://www.youtube.com/watch?v=Qokl02Omcic']"
      ></artist-card>
      <span class="artist-separation small-only"></span>
      <artist-card
        name="Dubamix"
        description="Dub électro militant"
        :links="['https://www.facebook.com/dubamixofficiel/', 'https://www.youtube.com/watch?v=B7j6mhXfiPQ&t=198s']"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Ackee Saltfish"
        description="Reggae bass cookers"
        :links="['https://www.facebook.com/theackeesaltfish/', 'https://soundcloud.com/user-664364986/the-ackee-saltfish-digital-appetizer-dj-set']"
      ></artist-card>
    </div>

    <h1>Sonorisation</h1>
    <!--(Red Rockers Sound) sapin (High Garden Sound) sapin (Amahoro Sound)-->
    <div class="artists">
      <artist-card
        name="Red Rockers Sound"
        description="Scène principale"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="High Garden Sound"
        description="Scène warm up"
      ></artist-card>
      <span class="artist-separation"></span>
      <artist-card
        name="Amahoro Sound"
        description="Freestyle bar, open mic"
        :links="['https://soundcloud.com/amahoro-sound']"
      ></artist-card>
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
