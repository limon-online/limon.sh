<template>
  <div id="sign-up-container" class="container flex-column">
    <h1>
      Sign Up
    </h1>
    <form>
      <input-border-label
        id="sign-up-email"
        type="email"
        label="Email"
        placeholder="email@example.com"
        v-model="email"
      />
      <input-border-label
        id="sign-up-password"
        type="password"
        label="Password"
        placeholder="password"
        v-model="password"
      />
      <password-strength-meter
        :password="password"
      />
      <button
        type="submit"
        id="sign-up-submit-button"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";
  import InputBorderLabel from "@/components/library/input/InputBorderLabel.vue";
  import PasswordStrengthMeter from "@/components/library/progress/PasswordStrengthMeter.vue";

  export default defineComponent({
    name: "SignUp",
    components: {
      InputBorderLabel,
      PasswordStrengthMeter
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
  #sign-up-container {
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

  #sign-up-submit-button {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
