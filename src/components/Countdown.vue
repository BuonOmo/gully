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
    <div class="alternative text-container">
      <div class="text-content">
        19 <span class="color accent">&</span> 20 juillet
        {{ date.getFullYear() }}
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
