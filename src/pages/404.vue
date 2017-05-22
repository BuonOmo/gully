<template>
  <main-layout>
    <main>
      <h1><span>4</span><span>0</span><span>4</span></h1>
      <p>La page que tu cherches n'existe pas...</p>
    </main>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      MainLayout,
      VLink
    }
  }
</script>

<style lang="sass" scoped>
  main
    margin: auto
    display: block
    max-width: 600px
    padding-top: 17%
    text-align: center
    h1
      font-size: 8em
      margin-bottom: 0
      >span
        font-family: title
      @for $i from 0 through 2
        >span:nth-of-type(#{$i + 1})
          -webkit-animation: blur 2s $i*0.3s 41 alternate
          -o-animation: blur 2s $i*0.3s 41 alternate
          animation: blur 2s $i*0.3s 41 alternate

  @keyframes blur
    from
      filter: blur(8px)
    to
      filter: none
</style>
