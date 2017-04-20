<template>
    <div>
        <h1 class="title">
            Gully Sound #5
        </h1>
        <slot></slot>
        <nav>
            <ul>
                <li>
                    <v-link href="/programmation">Programmation</v-link>
                </li>
                <li>
                    <v-link href="/billeterie">Billeterie</v-link>
                </li>
                <li>
                    <v-link href="/infos">Infos pratiques</v-link>
                </li>
                <li>
                    <v-link href="/photos">Photos / Vidéos</v-link>
                </li>
                <li>
                    <v-link href="/artfact">Association Artfact</v-link>
                </li>
                <li>
                    <v-link href="/contact">Contact</v-link>
                </li>
            </ul>
        </nav>
        <aside>
            <ul>
                <li><a href="https://www.facebook.com/artfactassociation/" target="_blank">
                    <i class="fa fa-4 fa-facebook-official" aria-hidden="true"></i>
                </a></li>
                <li><a href="https://www.youtube.com/channel/UC5CBBUAr0w1HHjV4HxYSmSA" target="_blank">
                    <i class="fa fa-4 fa-youtube"></i>
                </a></li>
            </ul>
        </aside>
    </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style lang="sass">
    $primary-color: snow;
    .fa.fa-4 {
        font-size: xx-large;
    }
    /*                                                                                               BACKGROUND IMAGE */
    body {
        background-image: url('../img/backgound-classique.jpg');
        background-size: cover;
    }

    @font-face {
        font-family: 'title';
        src: url('../fonts/CutMeOut3.ttf');
    }

    @font-face {
        font-family: 'main';
        src: url('../fonts/ABeeZee-Regular.otf');
    }

    * {
        font-family: main,serif;
        color: $primary-color;
    }

    h1 {
        font-size: 5em;
        font-family: title,cursive;
        margin-top: 16px;
        font-weight: normal;
    }

    nav {
        background-color: $primary-color;
        mix-blend-mode: screen;
        * {
            color: black;
        }
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

        >ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            >li {
                 font-variant: small-caps;
                 font-size: x-large;
                 font-weight: bolder;
             }
        }

    }
    aside {
        position: absolute;
        width: 98%;
        top: 0;
        left: 0;

        a {
            text-decoration: none;
        }

        >ul {
            float: right;

            >li {
                display: inline;

                &:first-child {
                   margin-right: 4px;
                }
            }
        }
    }
    ul {
        list-style-type: none;
    }
</style>
