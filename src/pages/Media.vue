<template>
  <detail-layout>
    <template v-for="photoGroup in reversePhotoInformation">
      <h1>{{photoGroup.text}}, {{photoGroup.date}}</h1>
      <div class="grid-photo-container">
        <img v-for="n in photoGroup.count"
             @click="showModal(photoGroup, n)"
             :src="loadImage(photoGroup.edition, n, 400)"
             :alt="`GULLY_${photoGroup.edition}_${n}.jpg`">
      </div>
    </template>
    <modal-component v-if="isModal" @close="hideModal()">
      <h1 slot="header">{{modalEdition.text}}, {{modalEdition.date}}</h1>
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

  export default {
  	data() {
      return {
      	editionCount: photosInformation.length,
      	photosInformation,
        isModal: false,
        modalEdition: -1,
        modalPhoto: -1
      }
    },

    computed: {
  		reversePhotoInformation() {
  			return this.photosInformation.slice().reverse()
        }
    },

    components: {
      DetailLayout,
      ModalComponent
    },

    methods: {
      loadImage(edition, number, size = 'original') {
      	if (![400, 1200, 'original'].includes(size)) throw new Error(`Bad size argument (${size})`)
        return require(`../img/photos/${size}/GULLY_${edition}_${number}.jpg`)
      },

      showModal(edition, number) {
      	if (screen.width <= 1000) return
      	this.modalEdition = edition
        this.modalPhoto = number
        this.isModal = true
        document.body.classList.add('modal-open')
      },

      hideModal() {
        this.isModal = false
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
