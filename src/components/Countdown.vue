<template>
  <span class="container">
    <div class="main block-container">
      <div class="block">
        <p class="digit">{{ days }}</p>
        <p class="text">Jours</p>
      </div>
      <div class="block">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Heures</p>
      </div>
      <div class="block">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
      </div>
      <div class="block">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Secondes</p>
      </div>
    </div>
    <div class="alternative text-container marquee">
      <div class="text-content">
        19 <span class="color accent">&</span> 20 juillet
        {{ date.getFullYear() }}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        –
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Arandas (Ain)
      </div>
    </div>
  </span>
</template>

<script>
  export default {
    created() {
      window.setInterval(() => {
        this.now = Math.trunc(Date.now() / 1000);
      }, 1000);
    },

    props: {
      date: Date
    },

    data() {
      return {
        now: Math.trunc(Date.now() / 1000),
        dateNumber: Math.trunc(this.date.getTime() / 1000),
        hovering: false
      }
    },
    computed: {
      seconds() {
        return (this.dateNumber - this.now) % 60;
      },

      minutes() {
        return Math.trunc((this.dateNumber - this.now) / 60) % 60;
      },

      hours() {
        return Math.trunc((this.dateNumber - this.now) / 60 / 60) % 24;
      },

      days() {
        return Math.trunc((this.dateNumber - this.now) / 60 / 60 / 24);
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100)

  *
    font-family: 'Roboto', serif

  .alternative
    /*display: none*/
    font-size: x-large
    text-align: center
    margin-top: 4px
    margin-left: 4px

  .marquee
    height: 50px
    position: relative
    overflow: hidden
    white-space: nowrap

  .marquee div
    position: absolute
    width: 100%
    height: 100%
    margin: 0
    line-height: 50px
    text-align: center
    transform: translateX(0%)
    animation: slide 8s ease alternate infinite

  @keyframes slide
    0%
      transform: translateX(0%)
    33%
      transform: translateX(0%)
    66%
      transform: translateX(-59%)
    100%
      transform: translateX(-59%)

  .block-container
    width: 270px
    display: flex
    flex-direction: row

  .text-container
    width: 270px
    justify-content: center
    align-items: center
    .text-content
      font-family: 'Roboto', serif
      width: auto
      height: auto
      font-size: xx-large

  .container
    z-index: 100
    position: absolute
    top: 0
    min-width: 270px
    min-height: 85px

  .block
    display: flex
    flex-direction: column
    margin: 0 8px

  .text
    font-family: 'Roboto Condensed', serif
    margin-top: 4px
    margin-bottom: 10px
    text-align: center

  .digit
    color: #ecf0f1
    font-family: 'Roboto', serif
    font-size: xx-large
    margin: 5px
    text-align: center
</style>
