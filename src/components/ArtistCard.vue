<template>
  <div class="artist-card card-container" :class="{wide: wide}">
    <div class="wrapper" :class="artist.ref">
      <div><!-- this is for CSS border purpose --></div>
      <span class="text title">{{ artist.title }}</span>
      <span class="text description" v-if="artist.description">{{ artist.description }}</span>
      <aside>
        <link-list :list="artist.links" />
      </aside>
    </div>
  </div>
</template>

<script>
  import LinkList from './LinkList.vue'

  export default {

    props: {
      artist: {
        type: Object,
        /*
        required: true
        /*/
        // debug:
        default () {
          return {
            description: "Live reggae dub",
            ref: 'steep_bank_project',
            title: "Steep Bank Project",
            links: ['https://www.facebook.com/SteepBankProject/',
                    'https://www.youtube.com/channel/UCD-0DEfsfBWqmtFDe4t9DaQ',
                    'https://soundcloud.com/mc-akro']
          }
        }
        //*/
      },
      wide: {
        type: Boolean,
        default: false
      }
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
  // Update this using a system like Klaxit insight's palette:
  // $images: ackee_satlfish bhale_bacce_crew blaze_up_feat_ras_demo dancehall dub_addict_feat_joe_pilgrim dubamix foot
  // $images: join($images, graffititi iternal_sound_feat_ranking_diximal king_hifi_feat_lasai proleter rasputain)
  // $images: join($images, red_rockers_meets_king_everald riddim_tuffa_feat_charlie_p ruff_n_tuff sumac_dub)
  // $images: join($images, skankin_sound_feat_mc_akro slackline sonorisation sound_systems_locaux steep_bank_project)

  $card-width: 240px

  aside
    position: absolute
    top: 8px
    right: 8px

  .steep_bank_project
    background-image: url('https://picsum.photos/240/240')
    background-size: contain
  //@each $image in $images
  //  .#{$image}
  //    background-image: url('../img/artists/#{$image}.jpg')
  //    background-size: contain

  .wrapper
    margin: 10px
    position: relative
    width: $card-width
    height: $card-width
    .wide &
      width: 2 * $card-width + 30px + 20px

    &:hover
      div
        width: 100%
        height: 100%
        box-sizing: border-box
        background-image: url('https://picsum.photos/240/240')
        background-size: contain
        filter: blur(2px)
        mix-blend-mode: color
      .title
        transform: translate($card-width*0.04) scale(1.08)
      .description
        transform: translate(- $card-width*0.04) scale(1.08)

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
    .wrapper
      width: 78vw
      height: 78vw
      .wide &
        height: 39vw
      &:hover
        .title
          transform: translate(80vw*0.04) scale(1.08)
        .description
          transform: translate(-80vw*0.04) scale(1.08)
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
