<template>
  <div class="card-container">
    <aside>
      <link-list :list="artist.links" />
    </aside>
    <div class="wrapper" :class="artist.ref">
      <div><!-- this is for CSS border purpose --></div>
      <span class="text title">{{ artist.title }}</span>
      <span class="text description" v-if="artist.description">{{ artist.description }}</span>
    </div>
    <aside :class="{empty: !artist.extra}">
      <link-list :list="artist.extra" />
    </aside>
  </div>
</template>

<script>
  import LinkList from './LinkList.vue'

  export default {
    props: {
      artist: {
        type: Object,
        required: true
      },
    },

    components: {
      LinkList
    },

    data() {
      return {
        isModal: false
      }
    }
  }
</script>

<style lang="sass" scoped>
  // $images: ackee_satlfish bhale_bacce_crew blaze_up_feat_ras_demo dancehall dub_addict_feat_joe_pilgrim dubamix foot
  // $images: join($images, graffititi iternal_sound_feat_ranking_diximal king_hifi_feat_lasai proleter rasputain)
  // $images: join($images, red_rockers_meets_king_everald riddim_tuffa_feat_charlie_p ruff_n_tuff sumac_dub)
  // $images: join($images, skankin_sound_feat_mc_akro slackline sonorisation sound_systems_locaux steep_bank_project)

  $card-width: 840px

  aside
    width: 30px
    min-height: 28px

  .card-container
    display: flex
    justify-content: space-around
    align-items: center

  //@each $image in $images
  //  .#{$image}
  //    background-image: url('../img/artists/#{$image}.jpg')
  //    background-size: contain

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
        transform: translate($card-width*0.18) scale(1.6)
      .description
        transform: translate(- $card-width*0.18) scale(1.6)

  .text
    transition: transform 0.3s ease
    position: absolute
    background-color: #ffdc46
    padding: 4px
    mix-blend-mode: hard-light
    font-family: main, serif
    font-size: 1.2em
    &.title
      top: 20px
      left: 4px
    &.description
      bottom: 20px
      right: 4px

  @media only screen and (max-device-width: 480px)
    .text
      font-size: 1.4em

    .card-container
      margin-bottom: 22px
      flex-wrap: wrap
      > .wrapper
        order: 1
      > aside
        order: 2
    aside
      width: 100px
    .empty
      display: none
</style>
