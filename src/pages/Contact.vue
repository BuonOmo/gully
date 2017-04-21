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
            <div>
                <p>
                    Président
                    <br>
                    Emeric Duclaux
                </p>
                <a class="smaller" href="mailto:emeric.duclaux@gmail.com">emeric.duclaux@gmail.com</a>
            </div>
            <div>
                <p>
                    Trésorier
                    <br>
                    Olivier Paquelet
                </p>
                <a class="smaller" href="mailto:olivier_paquelet@outlook.fr">Olivier_paquelet@outlook.fr</a>
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

<style lang="sass">
    .main-content {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        font-size: xx-large;
        margin: auto;
        text-align: center;
        margin-top: 15%;
        >div {
            width: 50%;
            &:first-child {
                width: 100%;
            }
        }
    }
    .smaller {
        font-size: large;
    }
</style>