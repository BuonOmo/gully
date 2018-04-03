<template>
  <detail-layout>
    <template v-for="photoGroup in photosInformation">
      <h1>{{photoGroup.text}}, {{photoGroup.date}}</h1>
      <div class="grid-photo-container">
        <img class="small-picture"
             v-for="n in photoGroup.count"
             :src="loadImage(photoGroup.edition, n)"
             :alt="`GULLY_${photoGroup.edition}_${n}.jpg`">
      </div>
    </template>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import photosInformation from '../img/photos/index.yml'

  export default {
  	data() {
      return {
      	photosInformation: photosInformation.reverse()
      }
    },

    components: {
      DetailLayout
    },

    methods: {
      loadImage(edition, number) {
        return require(`../img/photos/thumbnails/GULLY_${edition}_${number}.jpg`)
      }
    }
  }
</script>

<style lang="sass">

  $photo-margin: 5px

  .grid-photo-container
    /* Prevent vertical gaps */
    line-height: 0

    column-count: 4
    column-gap: $photo-margin

    > img
      /* Just in case there are inline attributes */
      width: 100%
      height: auto
      margin-bottom: $photo-margin

  @media (max-width: 1000px)
    .grid-photo-container
      column-count: 3
  @media (max-width: 800px)
    .grid-photo-container
      column-count: 2
  @media (max-width: 400px)
    .grid-photo-container
      column-count: 1
</style>
