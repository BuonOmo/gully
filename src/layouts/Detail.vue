<template>
  <div class="full-width-container">
    <home-page/>
    <main>
      <slot/>
    </main>
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

  main
    min-height: 100vh
    padding: 30px 20px 20px
    margin: auto
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
      &:hover
        color: darken(steelblue, 1)
      &:visited
        color: maroon
</style>