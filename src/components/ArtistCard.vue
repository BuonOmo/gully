<template>
  <div class="wrapper" :class="image"><span class="close"></span>
    <div></div><span class="text">
    <p>{{ title }}</p></span>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        image: this.name
      }
    },

    computed: {
      title() {
        return this.name.toUpperCase().replace(/_/g, ' ');
      }
    }
  }
</script>

<style lang="sass" scoped>
  $images: soom_t_ft_zion_high_foundation missah_et_weedo red_rockers_digital_band blaze_up_sound brainless_sound
  $images: join($images, earlydays_sound_ft_ghosthrider emka_loman ragga_youths_posse rakoon atomic_spliff)
  $images: join($images, conquering_sound_ft_sir_jean skankin_sound_ft_mc_akro_ft_mista_t dreadsquad_ft_kasia_malenda)
  $images: join($images, dancehall graf jeux_libres sound_systems_locaux foot irie_ites slackline)

  $card-size: 280px

  @each $image in $images
    .#{$image}
      background-image: url('../img/artists/#{$image}.jpg')
      background-size: contain

  .wrapper.earlydays_sound_ft_ghosthrider .text
    bottom: 180px

  .wrapper
    margin: 10px
    position: relative
    width: $card-size
    height: $card-size

    div
      width: 100%
      height: 100%
      box-sizing: border-box
      mix-blend-mode: screen
      border: 4px groove

    &:hover .text
      transform: translate($card-size*0.18) scale(1.6)

    .text
      transition: transform 0.3s ease
      text-align: center
      position: absolute
      bottom: 28px
      left: 4px
      background-color: #eee
      padding: 4px
      mix-blend-mode: hard-light
      >p
        font-family: title, serif
        font-size: 1.2em
        width: $card-size*0.58
        color: black
        margin: 0
</style>