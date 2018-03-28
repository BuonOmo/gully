<template>
  <detail-layout>
    <template v-for="photoGroup in photosInformation.reverse()">
      <h1>{{photoGroup.text}}, {{photoGroup.date}}</h1>
      <!-- the tabindex is just here for the element to be focusable -->
      <img class="small-picture"
           tabindex="1"
           v-for="n in photoGroup.count"
           :data-id="`${photoGroup.edition}_${n}`"
           :src="loadImage(photoGroup.edition, n)"
           :alt="`GULLY_${photoGroup.edition}_${n}.jpg`"
           :width="getWidth(photoGroup.edition, n)">
      <!--@click="showImage(photoGroup.edition, n)"-->
    </template>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import photosInformation from '../img/photos/index.yml'
  import Vue from 'vue'

  export default {
  	data() {
      const w = photosInformation.map(({count}) =>
        new Array(count).fill(290)
      )

      return {
      	photosInformation,
        w
      }
    },

    components: {
      DetailLayout
    },

    methods: {
      loadImage(edition, number) {
        return require(`../img/photos/GULLY_${edition}_${number}.jpg`)
      },

      showImage(edition, number) {
      	// https://vuejs.org/v2/guide/list.html#Array-Change-Detection
      	this.w[edition-1].splice(number - 1, 1, 900)
      	// this.w[edition-1][number] = 900
      },

      getWidth(edition, number) {
      	return document.activeElement.getAttribute('data-id') === `${edition}_${number}` ? 900 : 290
      }
    }
  }
</script>

<style lang="sass">
  .small-picture
    margin: 2px
</style>
