<template>
    <div>
        <h1 class="title">
            Gully Sound #5
        </h1>
        <slot></slot>
        <nav>
            <ul>
                <li>
                    <v-link href="/">Programmation</v-link>
                </li>
                <li>
                    Infos pratiques
                </li>
                <li>
                    <v-link href="/billeterie">Billeterie</v-link>
                </li>
                <li>
                    Photos / Vidéos
                </li>
                <li>
                    <v-link href="/artfact">Association Artfact</v-link>
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
        <aside>
            <ul>
                <li><a href="https://www.facebook.com/artfactassociation/">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a></li>
                <li><a href="https://www.youtube.com/user/ThePCPTB">
                    <i class="fa fa-youtube"></i>
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
    @font-face {
        font-family: 'title';
        src: url('../fonts/CutMeOut3.ttf');
    }

    @font-face {
        font-family: 'main';
        src: url('../fonts/ABeeZee-Regular.otf');
    }

    * {
        font-family: main;
    }

    h1 {
        font-family: title;
    }

    nav {
        box-sizing: border-box;
        width: 99%;
        position: absolute;
        bottom: 0;

        >ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

    }
    aside {
        position: absolute;
        width: 99%;
        top: 0;

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
