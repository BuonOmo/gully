<template>
  <ul>
    <li v-for="link in list">
      <a :href="link" target="_blank">
        <i :class="'spec-font-size' + getFontAwesomeLogoFromLink(link)" ></i>
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
      getFontAwesomeLogoFromLink(link) {
        const basename = link.match(/https?:\/\/(?:www.)?([^.]+)/)[1]
        return ['facebook', 'twitter', 'soundcloud', 'youtube'].includes(basename)
          ? `fab fa-${basename}`
          : 'fas fa-globe'
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
    color: #282861
    &:hover
      color: lighten(#282861, 20%)
    &:visited
      color: maroon


  @media only screen and (max-device-width: 480px)
    ul
      flex-direction: row
      justify-content: space-around
      height: initial
      width: 100px

</style>
