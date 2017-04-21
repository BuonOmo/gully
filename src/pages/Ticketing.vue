<template>
    <main-layout>
        <iframe id="haWidget" src="https://www.helloasso.com/associations/artfact/evenements/festival-gully-sound-5/widget"
                style="width:800px;height:750px;border:none;"></iframe>
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

<style>
    #haWidget {
        display: block;
        margin: auto;
    }
</style>