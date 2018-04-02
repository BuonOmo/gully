<template>
  <ul>
    <li v-for="link in list">
      <a :href="link" target="_blank">
        <i :class="'fab spec-font-size fa-' + extractSiteName(link)" ></i>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
  	props: {
      list: {
        type: Array,
        required: true
      }
    },

    methods: {
      extractSiteName(link) {
        return link.match(/https?:\/\/(?:www.)?([^.]+)/)[1]
      }
    }
  }
</script>

<style lang="sass" scoped>
  ul
    list-style-type: none
    padding: 0
    margin: 0
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-evenly
    height: 100px


  .spec-font-size
    font-size: 1.7em

  a
    color: cornflowerblue
    &:hover
      color: darken(steelblue, 1)
    &:visited
      color: maroon


  @media only screen and (max-device-width: 480px)
    ul
      flex-direction: row
      justify-content: space-around
      height: initial
      width: 100px

</style>
