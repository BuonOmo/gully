<template>
    <main-layout>
        <div class="main-content">
            <div>
                <p>
                    Pour demander des informations, venir jouer au Gully Sound, devenir bénévole ou pour toutes autres
                    demandes, contactez-nous !
                    <br><a href="mailto:asso.artfact@gmail.com">asso.artfact@gmail.com</a>
                </p>
            </div>
        </div>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>

<style lang="sass" scoped>
    .main-content
        display: flex
        flex-wrap: wrap
        width: 50%
        font-size: xx-large
        margin: auto
        text-align: center
        padding-top: 15%
        >div
            width: 50%
            &:first-child
                width: 100%

    .smaller
        font-size: large
</style>