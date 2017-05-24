<template>
  <detail-layout>
    <h1>Vendredi 20h-3h</h1>
    <div class="card-container"><artist-card :name="artist" v-for="artist in artists.friday"></artist-card></div>
    <h1>Samedi après-midi 12h-19h</h1>
    <div class="card-container"><artist-card :name="artist" v-for="artist in artists.saturdayAM"></artist-card></div>
    <h1>Samedi 20h-5h</h1>
    <div class="card-container"><artist-card :name="artist" v-for="artist in artists.saturdayPM"></artist-card></div>
    <p>Vous pouvez aussi télécharger le détail de la programmation au format pdf
      <a :href="progFile" download="Programmation.jpg">ici</a>&nbsp;!</p>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ArtistCard from '../components/ArtistCard.vue'
  import PROG_FILE from '../img/programmation.jpg'

  export default {
    data() {
      return {
        progFile: PROG_FILE,
        artists: {
          friday: [
            'soom_t_ft_zion_high_foundation',
            'missah_et_weedo',
            'red_rockers_digital_band',
            'brainless_sound',
            'conquering_sound_ft_sir_jean',
            'blaze_up_sound'
          ],
          saturdayAM: [
            'emka_loman'
          ],
          saturdayPM: [
            'dreadsquad_ft_kasia_malenda',
            'rakoon',
            'atomic_spliff',
            'earlydays_sound_ft_ghosthrider',
            'ragga_youths_posse',
            'skankin_sound_ft_mc_akro_ft_mista_t'
          ]
        }
      }
    },

    components: {
      DetailLayout,
      ArtistCard
    }
  }
</script>

<style lang="sass" scoped>
  h1
    font-family: title
    font-size: 3em

  .card-container
    padding-top: 20px
    display: flex
    justify-content: space-around
    flex-wrap: wrap

  p
    padding-top: 40px
</style>