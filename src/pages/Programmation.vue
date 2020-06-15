<template>
  <detail-layout>
    <h1>Apercu de l'edition 2019</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/orJTg2nTRrw" frameborder="0"
    allowfullscreen></iframe>

    <h1>Annulation 2020 — Report 2021</h1>
    <p>
      C'est avec beaucoup d'émotion que nous vous annonçons le report de la huitème et dernière édition du Festival Gully Sound !
    </p>
    <p>
      Depuis le début de la crise, le maintien du festival semblait compromis mais nous avions des raisons d'y croire. Le Gully est un petit festival assez modulable qui se déroule annuellement le 3ème weekend de Juillet, des solutions étaient
      encourageantes !
    </p>
    <p>
      Depuis plusieurs semaines nous étudions les possibilités qui s’offrent à nous pour envisager un festival en toute sécurité pour que chacun puisse entrevoir un vrai weekend de détente. Après plusieurs discussions avec le ministère de la
      culture et la direction régionale des affaires culturelles Auvergne Rhône-Alpes ainsi que la mairie d'Arandas, l'annulation est sans appel.
    </p>
    <p>
      Il n'y a jamais eu de directives claires et précises émanant du gouvernement pour nous donner les clés d'une décision anticipée ou pour assurer la tenue d’un festival à jauge réduite. La succession d’annonces floues et paradoxales ont
      suscité l’espoir. Même si l’artifice était évident; pour le public, pour les artistes et pour toute la communauté du Gully nous nous devions de continuer d’avancer et de croire à l’infime cas où il serait possible d’organiser sereinement
      le festival. Nous attendions dernièrement une décision transparente des politiques à propos des concerts avant d'engager des dizaines de milliers d'euros à près d'un mois de l'événement. Comme pour la fête de la musique dans 21 jours, les
      discours brumeux piègent tous les acteurs de la culture dans l'incertitude et l'incohérence.
    </p>
    <p>
      Le déconfinement positif est malheureusement un trompe l’œil pour l’organisation du festival car nous sommes toujours concernés par les gestes barrières impossibles à garantir : masques, désinfection des surfaces, personnes à 1 mètre de
      distance et le risque de devenir un nouveau « cluster ». Un festival de musique à 500 personnes est à peine envisageable pour les institutions et insensé financièrement.
    </p>
    <p>
      Pour la grande famille du Gully et tous les festivaliers fidèles qui nous accompagnent, cette 8ème édition promettait d'être particulière, la déception n'en est que plus lourde. Cette dernière danse ne peut se faire à travers un masque,
      dans le froid des distanciations sociales et le refus de la 501ème personne sous prétexte qu'au-delà la jauge représenterait un risque plus élevé.
    </p>
    <p>
      La crise du Covid-19 a bousculé avec violence les projections de chacun. Elle sera certainement suivie par d’autres crises qui testeront de nouveau notre résilience aux aléas anthropiques. Pour autant nous croyons fermement que la Culture
      "physique" animera de nouveau nos vies et qu’une belle édition du Gully en 2021 sera possible !
    </p>
    <p>
      Nous nous efforcerons de proposer un festival de qualité et riche en expériences pour prouver que la culture associative bénévole à encore beaucoup à vous offrir. Nous souhaitons également que la dernière édition du Gully suscite
      l'engouement à d'autres de s'engager dans des projets collectifs ! La floraison des sound-systems et des organisateurs d'événements nous réjouit ! C'est dans cette optique que nous espérons renforcer la résilience culturelle des
      territoires : parsemée de festivals à taille humaine et aux identités singulières.
    </p>

    <hr />

    <p>
      😎 L'édition en juillet 2021 se déroulera selon le même format : 3 jours de festival entre concerts bouillants, animations ensoleillées, jeux de rencontres, friandises salées et sucrées, emplettes artisanales, camping forestier et
      plaisirs houblonnés ! La programmation sera quasi identique. Elle sera confirmée et complétée début 2021 !
    </p>
    <p>
      💝 Un grand merci aux artistes et à tous les partenaires du festival pour leur souplesse et leur bienveillance, eux qui subissent de plein fouet la crise... Nous vous souhaitons toute la force nécessaire pour surmonter cette épreuve !
    </p>
    <hr />
    <p>
      👩‍🎤 A propos de la scène ouverte avec la sono d'Amahoro Sound & Records : nous remercierons chaleureusement toutes les personnes qui ont postulé, le talent et la richesse des candidatures sont au rendez-vous ! Nous gardons bien au chaud
      vos demandes pour l'an prochain, et nous rouvrirons au printemps le formulaire pour ceux qui d'ici là souhaiteraient sauter le pas !
    </p>
    <hr />
    <p>
      👉 Festival Gully Sound #8 - Dernière édition - 2021
    </p>
    <p>
      <a href="https://www.facebook.com/events/1411526555671778/" target="_blank" rel="noopener noreferrer">
        &gt;&gt;&gt; 15 - 16 - 17 JUILLET 2021 - ARANDAS &lt;&lt;&lt;
      </a>
    </p>
    <hr />

    <p>
      Toute l'équipe du Gully, vous souhaite un excellent été, tristement inédit sans la tenue des festivals mais solidaire par nos envies communes de nous rapprocher !
    </p>
    <p>💋 Merci infiniment pour votre soutien !</p>
    <p>💋 Prenez soin de vous !</p>
    <p>💋 Bisous, câlins et autres interdits</p>

    <!-- <h1>Programmation a venir...</h1>
    <p class="justify">
    D'ici quelques temps, tu trouveras ici la programmation pour les soirées du jeudi 16, vendredi
    17 et samedi 18 juillet. Ainsi que toutes les activités durant le festival.
    Pour être le premier au courant, n'hésite pas à suivre
    <a href="https://www.facebook.com/events/1411526555671778/">la page facebook de l'évenement</a>! Et pour toutes
    les infos sur notre asso, c'est <a href="https://www.facebook.com/FestivalGullySound/">ici</a>.
    </p> -->
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
