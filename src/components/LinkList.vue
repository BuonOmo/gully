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
    height: 100px
    mix-blend-mode: soft-light
    &:hover
      mix-blend-mode: hard-light


  .link-icon
    font-size: 1.2em

  a
    color: white
    &:hover
      color: lighten(#282861, 20%)


  @media only screen and (max-device-width: 480px)
    ul
      flex-direction: row-reverse
      height: initial
      mix-blend-mode: hard-light
    li
      margin-right: 22px
    .link-icon
      font-size: 3.4em

</style>
