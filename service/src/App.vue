<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "App",

    mounted() {
      // TODO: Improve router redirect
      if (this.$store.getters.isUserAuth) {
        this.$router.push({name: 'Dashboard'})
      }
      else {
        this.$router.push({name: 'Landing'})
      }
    }
  })
</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
