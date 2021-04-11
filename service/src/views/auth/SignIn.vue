<template>
  <div id="sign-in-container" class="container flex-column">
    <h1>
      Sign In
    </h1>
    <form>
      <input-border-label
        id="sign-in-email"
        type="email"
        label="Email"
        placeholder="email@example.com"
        v-model="email"
      />
      <input-border-label
        id="sign-in-password"
        type="password"
        label="Password"
        placeholder="password"
        v-model="password"
      />
      <button type="submit" id="sign-in-submit-button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";
  import InputBorderLabel from "@/components/library/input/InputBorderLabel.vue";

  export default defineComponent({
    name: "SignIn",
    components: {
      InputBorderLabel
    },

    data() {
      return {
        email: '',
        password: ''
      }
    }
  })
</script>


<style lang="scss">
  #sign-in-container {
    width: 350px;
    margin-top: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #efeff5;
    border-radius: 12px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  #sign-in-submit-button {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
