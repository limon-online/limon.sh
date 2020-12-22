<template>
  <div class="progress">
    <div
      role="progressbar"
      class="progress-bar"
      v-bind:class="color"
      v-bind:style="{ width: progress + '%', color: color }"
      v-bind:aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>


<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      password: {
        type: String
      }
    },

    data() {
      return {
        progress: 0,
        color: 'bg-danger'
      }
    },

    watch: {
      password: function(newVal) {
        this.progress = Math.round((newVal.length / 24) * 100)

        if (this.progress <= 33) {
          this.color = 'bg-danger'
        }
        else if (this.progress <=66) {
          this.color = 'bg-warning'
        }
        else {
          this.color = 'bg-success'
        }
      }
    }
  })
  export default class PasswordStrengthMeter extends Vue {}
</script>
