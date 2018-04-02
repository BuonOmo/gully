<template>
  <div>
    <v-link href="/" class="image-container"><img class="top-logo" src="../img/logo.png" width="150px"></v-link>
    <div class="background" :class="'background-' + background">
      <a class="arrow left" @click="previousImage()"><i class="fa fa-4x fa-chevron-left"></i></a>
      <a class="arrow right" @click="nextImage()"><i class="fa fa-4x fa-chevron-right"></i></a>
      <slot/>
      <nav id="navbar">
        <ul>
          <li>
            <v-link href="/programmation">Programmation</v-link>
          </li>
          <li>
            <v-link href="/billeterie">Billeterie</v-link>
          </li>
          <li>
            <v-link href="/infos">Infos pratiques</v-link>
          </li>
          <!--<li>-->
          <!--<v-link href="/photos">Photos / Vidéos</v-link>-->
          <!--</li>-->
          <li>
            <v-link href="/contact">Contact</v-link>
          </li>
        </ul>
      </nav>
      <aside class="top-links">
        <ul>
          <li class="music-button"><a v-on:click="play()" class="click">
            <i class="fa fa-2x second-color" :class="isPlaying?'fa-pause':'fa-play'" aria-hidden="true"></i>
          </a></li>
          <li><a href="https://www.facebook.com/artfactassociation/" target="_blank">
            <i class="fab fa-2x fa-facebook" aria-hidden="true"></i>
          </a></li>
          <li><a href="https://www.youtube.com/channel/UC5CBBUAr0w1HHjV4HxYSmSA" target="_blank">
            <i class="fab fa-2x fa-youtube"></i>
          </a></li>
        </ul>
        <p class="download-music">
          <a :href="music.src" download="Gully Sound System — Lo (Bhale Bacce Crew).mp3">
            <span v-if="isPlaying">Téléchargement libre</span>
            <span v-else>Gully Sound System — Lo (Bhale Bacce Crew)</span>
          </a>
        </p>
      </aside>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import MUSIC_FILE from '../lo_gully-sound-system.mp3'
  import {IMAGE_COUNT} from '../main'

  export default {
    data() {
      return {
        music: new Audio(MUSIC_FILE),
        firstClick: false,
        neverClicked: true,
        isPlaying: false,
        background: +sessionStorage.getItem('GULLY_background') || IMAGE_COUNT - 1
      }
    },

    watch: {
      background(newValue) {
        sessionStorage.setItem('GULLY_background', newValue);
      }
    },

    methods: {
      play() {
        this.firstClick = this.neverClicked;
        this.neverClicked = false;
        if (this.music.paused) {
          this.music.play();
        } else {
          this.music.pause();
        }
        this.isPlaying = !this.music.paused;
      },

      nextImage() {
        this.background = (this.background + 1) % IMAGE_COUNT;
      },

      previousImage() {
        this.background = (IMAGE_COUNT + this.background - 1) % IMAGE_COUNT;
      }
    },

    components: {
      VLink
    }
  }
</script>

<style lang="sass">
  $primary-color: snow
  $second-color: #ffdc46
  $image-count: 27

  .fa.fa-4
    font-size: xx-large

  body
    margin: 0

  .click
    cursor: pointer

  .image-container
    width: 30px
    height: 30px

  .top-logo
    z-index: 1
    position: absolute
    top: 0

  .no-top-logo .top-logo
    display: none

  .arrow
    opacity: 0.4
    cursor: pointer
    position: absolute
    top: 50%
    z-index: 1000
    // not mandatory in each direction
    margin: 8px
    &:hover
      opacity: 10
    @each $side in left, right
      &.#{$side}
        #{$side}: 0

  /*                                                                                               BACKGROUND IMAGE   */
  .background
    position: relative
    background-size: cover
    height: 100vh
    -webkit-transition: background-image .4s ease-in-out
    transition: background-image .4s ease-in-out
    @for $i from 0 through $image-count - 1
      &.background-#{$i}
        background-image: url('../img/background/2018/#{$i}.jpg')

  /*                                                                                           FONTS AND GENERIC TAGS */
  @font-face
    font-family: 'title'
    src: url("../fonts/CutMeOut3.ttf")

  @font-face
    font-family: 'main'
    src: url("../fonts/ABeeZee-Regular.otf")

  *
    font-family: main, serif

  .background
    .second-color
      color: $second-color
    *
      color: $primary-color
    nav *
      color: black

  nav
    background-color: $primary-color
    mix-blend-mode: screen
    box-sizing: border-box
    width: 100%
    position: absolute
    bottom: 0
    left: 0
    border-bottom: outset lightgray 1px
    > ul
      margin: 5px
      display: flex
      flex-flow: row wrap
      align-items: center
      justify-content: space-around
      list-style-type: none
      padding: 0
      > li
        font-variant: small-caps
        font-size: xx-large
        font-weight: bold
        padding: 0 10px
        text-align: center
      @media screen and (max-width: 200*3px)
        $space-between-flex-box: 3px
        margin-top: -$space-between-flex-box
        > li
          min-width: 180px
          padding-top: $space-between-flex-box
          &:nth-child(3)
            order: 4

  .top-links
    position: absolute
    width: 98%
    top: 0
    left: 0
    a
      text-decoration: none
    > ul
      float: right
      > li
        display: inline
        &:first-child
          margin-right: 4px

  .download-music
    float: right
    margin-top: 25px
    margin-right: -20px
    font-style: italic
    font-size: 12px
</style>
