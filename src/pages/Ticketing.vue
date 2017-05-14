<template>
    <main-layout>
        <div class="container">
            <i class="fa fa-refresh fa-spin fa-5x" id="haPlaceholder"></i>
            <iframe id="haWidget" src="https://www.helloasso.com/associations/artfact/evenements/festival-gully-sound-5/widget"
                style="width:800px;height:650px;border:none;"></iframe>
        </div>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    mounted: function() {
      document.getElementById('haWidget').addEventListener('load', () => {
        document.getElementById('haPlaceholder').remove();
      });
    },
    components: {
      MainLayout
    }
  }
</script>

<style>
    .container {
        position: relative;
    }
    #haWidget {
        display: block;
        margin: 74px auto auto;
    }
    #haPlaceholder {
        position: absolute;
        left: calc(50vw - 35px);
        margin-top: 74px;
        display: block;
    }
</style>