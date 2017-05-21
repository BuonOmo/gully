<template>
  <span class="block-container" v-if="now < dateNumber">
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
  </span>
  <div v-else>
    C'est parti mon kiki !
  </div>
</template>

<script>
  export default {

    created() {
      window.setInterval(() => {
        this.now = Math.trunc(Date.now() / 1000);
      }, 1000);
    },

    props: {
      date: {
        type: String
      }
    },

    data() {
      return {
        now: Math.trunc(Date.now() / 1000),
        dateNumber: Math.trunc(Date.parse(this.date) / 1000)
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

    /* Computed properties will be here */
  }
</script>

<style lang="sass" scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100)

  .block-container
    width: 270px
    display: flex
    flex-direction: row

  .block-container:hover
    background: white
    .digit, .text
      color: black

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
