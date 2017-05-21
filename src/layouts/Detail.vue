<template>
  <div>
    <home-page></home-page>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  import HomePage from '../pages/Home.vue'

  export default {
    mounted() {
      setTimeout(() => navbar.scrollIntoView({ behavior: 'smooth' }), 500);
    },
    components: {
      HomePage
    }
  }
</script>

<style lang="sass" scoped>
  main
    min-height: 100vh
    padding: 30px 20px 20px
    margin: auto
    width: 800px
    max-width: 90%
    border-top: outset lightgray 1px
    *
      color: black
</style>