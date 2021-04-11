<template>
  <div class="progress">
    <div
      class="progress-bar"
      v-bind:class="color"
      v-bind:style="{ width: low + '%'}"
    ></div>
    <div
      class="progress-bar"
      v-bind:class="color"
      v-bind:style="{ width: medium + '%'}"
    ></div>
    <div
      class="progress-bar"
      v-bind:class="color"
      v-bind:style="{ width: height + '%'}"
    ></div>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "PasswordStrengthMeter",
    props: {
      password: {
        type: String
      }
    },

    data() {
      return {
        low: 0,
        medium: 0,
        height: 0,
        progress: 0,
        color: 'bg-danger'
      }
    },

    watch: {
      password: function(newVal) {
        this.progress = Math.round((newVal.length / 24) * 100)

        if (this.progress === 0) {
          this.low = 0
          this.medium = 0
          this.height = 0
        }

        // TODO: Fix last section in progress bar
        console.log(this.progress, this.low, this.medium, this.height)

        if (this.progress >= 0 && this.progress <= 33) {
          this.color = 'bg-danger'
          this.low = this.progress
          this.medium = 0
          this.height = 0
        }
        else if (this.progress >= 34 && this.progress <=66) {
          this.color = 'bg-warning'
          this.low = 33
          this.medium = this.progress - 33
          this.height = 0
        }
        else {
          this.color = 'bg-success'
          this.low = 33
          this.medium = 33

          if (this.progress > 100) {
            this.height = 32
          }
          else {
            this.height = this.progress - 67
          }
        }
      }
    }
  })
</script>


<style lang="scss">
  .progress-bar {
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 10px;
  }
</style>
