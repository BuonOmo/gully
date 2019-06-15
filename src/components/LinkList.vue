<template>
  <ul>
    <li v-for="link in list">
      <a :href="link" target="_blank">
        <i class="link-icon" :class="getFontAwesomeLogoFromLink(link)" ></i>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
  	props: {
      list: {
        required: true
      }
    },

    methods: {
      getFontAwesomeLogoFromLink(link) {
        const basename = link.match(/https?:\/\/(?:www.)?([^.]+)/)[1]
        const faTitle = {
          facebook: 'facebook',
          twitter: 'twitter',
          soundcloud: 'soundcloud',
          youtu: 'youtube',
          youtube: 'youtube'
        }
        return faTitle[basename] !== undefined
          ? `fab fa-${faTitle[basename]}`
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
    mix-blend-mode: difference


  .link-icon
    font-size: 1.2em

  a
    color: #282861
    color: white
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
