<template>
  <div class="wrapper" :class="image"><span class="close"></span>
    <div></div><span class="text">
    <p>{{ name.toUpperCase() }}</p></span>
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
        image: this.name.toLowerCase().replace(/ /g, '_')
      }
    }
  }
</script>

<style lang="sass" scoped>
  $images: atomic blazeup brainlesse conquering_sound dreadsqaud missah_et_weedo ragga_youth_posse rakoon red_rockers skankin soom_t_2

  @each $image in $images
    .#{$image}
      background-image: url('../img/artists/#{$image}.jpg')
      background-size: contain

  .wrapper
    position: relative
    width: 300px
    height: 300px

    div
      width: 100%
      height: 100%
      box-sizing: border-box
      mix-blend-mode: screen
      border: 4px groove

    &:hover .text
      transform: translate(54.2px) scale(1.6)

    .text
      transition: transform 0.3s ease
      text-align: center
      position: absolute
      bottom: 14px
      left: 4px
      font-size: 2em
      background-color: #eee
      padding: 4px
      mix-blend-mode: hard-light
      >p
        font-family: title
        font-size: .7em
        width: 175px
        color: black
        margin: 0

    &:hover .close
      z-index: 2
      cursor: pointer
      background-color: #eee
      mix-blend-mode: screen
      position: absolute
      border-bottom-left-radius: 20%
      top: 0
      right: 0
      content: url(https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_clear_black_36px.svg)
      height: 36px
</style>