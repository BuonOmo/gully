<template>
  <detail-layout>
    <h1>
      D&eacute;j&agrave; 8 ans  que l'aventure a d&eacute;but&eacute;, merci &agrave; vous !
    </h1>
    <div class="poster-container">
      <img v-for="poster in posters"
           class="poster"
           :class="{'with-action': currentPoster !== poster,
                    'current': currentPoster === poster,
                    'large': currentPoster !== null}"
           :src="currentPoster === poster ? poster.large : poster.small"
           :alt="poster.title" :download="poster.title"
           @click="setCurrentPoster(poster)"
           :key="poster.title">
    </div>

    <template v-for="photoGroup in reversePhotoInformation">
      <h1 :key="photoGroup.text">{{photoGroup.text}}</h1>
      <div class="grid-photo-container" :key="photoGroup.text">
        <img v-for="n in photoGroup.count"
             class="with-action"
             @click="showModal(photoGroup, n)"
             :src="loadImage(photoGroup.edition, n, 400)"
             :alt="`GULLY_${photoGroup.edition}_${n}.jpg`"
             :key="`GULLY_${photoGroup.edition}_${n}.jpg`">
      </div>
    </template>
    <modal-component v-if="isModal" @close="hideModal()">
      <h1 slot="header">{{modalEdition.text}}</h1>
      <img slot="body"
           class="full-content"
           :src="loadImage(modalEdition.edition, modalPhoto, 1200)"
           :alt="`GULLY_${modalEdition.edition}_${modalPhoto}.jpg`">
      <template slot="footer" class="modal-footer">
        <a @click="previous()" v-if="modalEdition.edition < editionCount || modalPhoto > 1">Précédente</a>
        <a :href="loadImage(modalEdition.edition, modalPhoto)"
           :download="`GULLY_${modalEdition.edition}_${modalPhoto}.jpg`">
          Télécharger la photo
        </a>
        <a @click="next()" v-if="modalEdition.edition > 1 || modalPhoto < modalEdition.count">Suivante</a>
      </template>
    </modal-component>
  </detail-layout>
</template>

<script>
  import DetailLayout from '../layouts/Detail.vue'
  import ModalComponent from '../components/Modal.vue'
  import photosInformation from '../img/photos/index.yml'
  import postersInformation from '../img/posters/index.yml'

  export default {
    data() {
      const urlParams = new URLSearchParams(window.location.search)

      return {
        currentPoster: null,
        editionCount: photosInformation.length,
        photosInformation,
        posters: postersInformation.map((title, index) => ({
          title,
          small: require(`../img/posters/180/${index + 1}.jpg`),
          large: require(`../img/posters/900/${index + 1}.jpg`)
        })),
        modalEdition: urlParams.get('edition') === null
          ? null
          : photosInformation.find(info => info.edition === Number(urlParams.get('edition'))),
        modalPhoto: urlParams.get('photo') === null
          ? null
          : Number(urlParams.get('photo'))
      }
    },

    computed: {
      reversePhotoInformation() {
        return this.photosInformation.slice().reverse()
      },
      isModal() {
        return this.modalEdition != null && this.modalPhoto != null
      }
    },

    components: {
      DetailLayout,
      ModalComponent
    },

    watch: {
      modalPhoto(photo, oldPhoto) {
        if (!history.pushState) return
        if (this.modalEdition == null && oldPhoto == null) return

        let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname
        if (photo != null)
          newURL += `?edition=${this.modalEdition.edition}&photo=${photo}`
        window.history.pushState({path: newURL},'' , newURL)
      },
    },

    methods: {
      loadImage(edition, number, size = 'original') {
        if (typeof size === 'number')
          return `https://res.cloudinary.com/gully/image/upload/c_fit,w_${size}/photos/GULLY_${edition}_${number}.jpg`
        else
          return `https://res.cloudinary.com/gully/image/upload/photos/GULLY_${edition}_${number}.jpg`
      },

      setCurrentPoster(poster) {
        this.currentPoster = poster;
      },

      showModal(edition, number) {
        this.modalEdition = edition
        this.modalPhoto = number
        document.body.classList.add('modal-open')
      },

      hideModal() {
        this.modalEdition = null
        this.modalPhoto = null
        document.body.classList.remove('modal-open')
      },

      previous() {
        this.modalPhoto--
        if (this.modalPhoto < 1) {
          this.modalEdition = this.photosInformation[this.modalEdition.edition]
          this.modalPhoto = this.modalEdition.count
        }
      },

      next() {
        this.modalPhoto++
        if (this.modalPhoto > this.modalEdition.count) {
          this.modalPhoto = 1
          this.modalEdition = this.photosInformation[this.modalEdition.edition - 2]
        }
      }
    }
  }
</script>

<style lang="sass">

  $photo-margin: 5px
  $posters-count: 8

  .with-action
    cursor: pointer

  .poster-container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center

  .poster
    width: 99% / $posters-count
    &.large
      width: 99% / ($posters-count - 1)
    &.current
      margin-top: 5px
      width: 100%
      order: 1

  .current-poster
    margin-top: 5px
    transition: width .3s ease
    width: 100%

  .grid-photo-container
    /* Prevent vertical gaps */
    line-height: 0

    column-count: 4
    column-gap: $photo-margin

    > img
      width: 100%
      height: auto
      margin-bottom: $photo-margin

  @media (max-width: 1000px)
    .grid-photo-container
      column-count: 3
  @media (max-width: 800px)
    .grid-photo-container
      column-count: 2
  @media (max-width: 450px)
    .grid-photo-container
      column-count: 1

  /**** Modal Styling ****/
  body.modal-open
    overflow: hidden

  .full-content
    max-height: 80vh
    max-width: 90vw

  .modal-footer
    display: flex
    justify-content: space-evenly
</style>
