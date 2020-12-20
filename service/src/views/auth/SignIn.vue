<template>
  <form>
    <input-border-label
      id="sign-in-email"
      type="email"
      label="Email"
      placeholder="email@example.com"
    />
    <input-border-label
      id="sign-in-password"
      type="password"
      label="Password"
      placeholder="password"
    />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import InputBorderLabel from "@/components/library/input/InputBorderLabel.vue";

  @Options({
    components: {
      InputBorderLabel
    }
  })
  export default class SignIn extends Vue {}
</script>
