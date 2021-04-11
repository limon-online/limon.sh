<template>
  <navigation/>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Navigation from "@/components/landing/Navigation.vue";

  export default defineComponent({
    name: "Landing",
    components: {
      Navigation
    }
  })
</script>
