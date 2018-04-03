<template>
  <div class="full-width-container">
    <home-page/>
    <main>
      <slot/>
    </main>
    <footer>
      Fait avec &heartsuit; par
      <a href="mailto:buonomo.ulysse@gmail.com">Ulysse</a> sur
      <a href="https://github.com/buonomo/gully"><i class="fab fa-github"></i></a>
    </footer>
  </div>
</template>

<script>
  import HomePage from '../pages/Home.vue'

  export default {
    mounted() {
      navbar.scrollIntoView({ behavior: 'smooth', block: 'end' })
      setTimeout(() => navbar.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
    },
    components: {
      HomePage
    }
  }
</script>

<style lang="sass" scoped>
  // A great trick for expanding beyond a parent div:
  //  http://www.modusagency.com/css-trick-expanding-a-div-beyond-a-parent-container/
  .full-width-container
    overflow-x: hidden
    // 48px is roughly the navbar height, this min-height allows a clean scrolling.
    min-height: calc(200vh - 48px)
    position: relative

  $footer-height: 70px

  footer
    height: $footer-height - 20px
    margin-top: -$footer-height
    position: absolute
    width: 100%
    text-align: center
    background-color: snow
    border-top: 1px solid #eaeaea
    padding-top: 20px
    bottom: 0

  main
    padding: 30px 20px $footer-height
    margin: auto
    overflow: auto
    width: 900px
    max-width: 90%
    *
      color: black
    p
      text-align: justify
    h1
      &:first-letter
        font-family: title, cursive
  a
    color: cornflowerblue
    text-decoration: none
    &:hover
      color: darken(steelblue, 1)
    &:visited
      color: maroon
</style>