<template>
  <div class="artist-card card-container">
    <div class="wrapper" :style="{'background-image': `url(${image})`}">
      <div><!-- this is for CSS border purpose --></div>
      <span class="text title" v-html="name"></span>
      <span class="text description" v-if="description" v-html="description"></span>
      <aside>
        <link-list :list="links" />
      </aside>
    </div>
  </div>
</template>

<script>
  import LinkList from './LinkList.vue'

  export default {

    props: {
      name: {
        type: String,
        //*
        required: true,
        /*/ DEBUG
        default: "Steep Bank Project"
        //*/
      },
      description: {
        type: String,
        //*
        required: true,
        /*/ DEBUG
        default: "Live reggae dub"
        //*/
      },
      links: {
        type: Array[String],
        //*
        default: () => []
        /*/ DEBUG
        default: () => [
          'https://www.facebook.com/SteepBankProject/',
          'https://www.youtube.com/channel/UCD-0DEfsfBWqmtFDe4t9DaQ',
          'https://soundcloud.com/mc-akro'
        ]
        //*/
      }
    },

    computed: {
      ref () {
        return this.name.toLowerCase().replace(/[^\w]+/g, '_')
      },
      image () {
        return `https://res.cloudinary.com/gully/image/upload/c_fit,w_240/artists/${this.ref}.jpg`
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
  $card-width: 240px

  aside
    position: absolute
    top: 8px
    right: 8px

  .wrapper
    margin: 10px
    position: relative
    width: $card-width
    height: $card-width

    &:hover
      div
        width: 100%
        height: 100%
        box-sizing: border-box
        background-color: pink
        mix-blend-mode: hard-light
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
      background-size: contain
      &:hover
        .title
          transform: translate(80vw*0.04) scale(1.08)
        .description
          transform: translate(-80vw*0.04) scale(1.08)
    .text
      font-size: 3.4em

    .card-container
      margin: 22px 0
      flex-wrap: wrap
    .empty
      display: none
</style>
