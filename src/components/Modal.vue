<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header" />
          </div>

          <div class="modal-body">
            <slot name="body" />
          </div>
          <div class="modal-footer">
            <slot name="footer" />
          </div>
          <a class="modal-exit-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {}
</script>

<style lang="sass">
  .modal-wrapper a
    cursor: pointer
    text-decoration: none
    color: cornflowerblue
    &:hover
      color: darken(steelblue, 1)
    &:visited
      color: maroon

  .modal-mask
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .5)
    display: table
    transition: opacity .3s ease

  .modal-wrapper
    display: table-cell
    vertical-align: middle

  .modal-container
    position: relative
    width: fit-content
    max-width: 90%
    margin: 0px auto
    padding: 20px 30px
    background-color: snow
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
    transition: all .3s ease
    font-family: Helvetica, Arial, sans-serif

  .modal-header > h1
    margin-top: 0
    &:first-letter
      font-family: title, serif

  .modal-body
    margin: 20px 0
    overflow: scroll
    max-height: 80vh

  .modal-exit-button
    position: absolute
    cursor: pointer
    top: 5px
    right: 5px

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter
    opacity: 0

  .modal-leave-active
    opacity: 0

  .modal-enter .modal-container,
  .modal-leave-active .modal-container
    -webkit-transform: scale(0.1)
    transform: scale(0.1)
</style>
