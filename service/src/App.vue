<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    mounted() {
      if (this.$store.getters.isUserAuth) {
        this.$router.push({name: 'Dashboard'})
      }
      else {
        this.$router.push({name: 'Landing'})
      }
    }
  })
  export default class App extends Vue {}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding-bottom: 20px;
}
</style>
