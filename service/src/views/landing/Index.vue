<template>
  <navigation/>
  <router-view/>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Navigation from "@/components/landing/Navigation.vue";

  @Options({
    components: {
      Navigation
    }
  })
  export default class Landing extends Vue {}
</script>
