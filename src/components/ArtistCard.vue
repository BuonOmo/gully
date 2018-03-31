<template>
  <div>
    <div class="wrapper" :class="artist.ref">
      <div><!-- this is for CSS border purpose --></div>
      <span class="text title">{{ artist.title }}</span>
      <span class="text description" v-if="artist.description">{{ artist.description }}</span>
    </div>
  </div>
</template>

<script>
  import ModalComponent from './Modal.vue'

  export default {
    props: {
      artist: {
        type: Object,
        required: true
      },
    },

    components: {
      ModalComponent
    },

    data() {
      return {
        isModal: false
      }
    }
  }
</script>

<style lang="sass" scoped>
  $images: ackee_satlfish bhale_bacce_crew blaze_up_feat_ras_demo dancehall dub_addict_feat_joe_pilgrim dubamix foot
  $images: join($images, graffititi iternal_sound_feat_ranking_diximal king_hifi_feat_lasai proleter rasputain)
  $images: join($images, red_rockers_meets_king_everald riddim_tuffa_feat_charlie_p ruff_n_tuff sumac_dub)
  $images: join($images, skankin_sound_feat_mc_akro slackline sonorisation sound_systems_locaux steep_bank_project)

  $card-width: 900px

  @each $image in $images
    .#{$image}
      background-image: url('../img/artists/#{$image}.jpg')
      background-size: contain

  .wrapper
    margin: 10px
    position: relative
    width: $card-width
    height: $card-width / 4

    div
      width: 100%
      height: 100%
      box-sizing: border-box
      mix-blend-mode: screen
      border: 4px groove

    &:hover
      .title
        transform: translate($card-width*0.30) scale(1.65)
      .description
        transform: translate(- $card-width*0.30) scale(1.65)

    .text
      transition: transform 0.3s ease
      text-align: center
      position: absolute
      background-color: #ffdc46
      padding: 4px
      mix-blend-mode: hard-light
      &.title
        top: 20px
        left: 4px
      &.description
        bottom: 20px
        right: 4px
      >p
        font-family: main, serif
        font-size: 1.2em
        width: $card-width*0.58
        color: #484848
        margin: 0

</style>