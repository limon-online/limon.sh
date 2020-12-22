<template>
  <div class="form-group">
    <span class="input-label-border">
      <input
        class="form-control"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :required="required"
        autofocus
      >
      <label :for="id">
        {{ label }}
      </label>
    </span>
  </div>
</template>


<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import INPUT_TYPE from "@/components/library/input/consts";

  @Options({
    props: {
      id: {
        type: String,
        required: true
      },
      type: {
        type: String,
        validator: (value: string) => {
          return INPUT_TYPE.includes(value)
        }
      },
      label: {
        type: String,
        required: true
      },
      modelValue: {
        type: String
      },
      placeholder: {
        type: String
      },
      required: {
        type: Boolean,
        default: false
      }
    },

    emits: [
      'update:modelValue'
    ]
  })
  export default class InputBorderLabel extends Vue {}
</script>


<style lang="scss">
  .input-label-border {
    display: block;
    position: relative;
  }

  .input-label-border label,
  .input-label-border > span {
    position: absolute;
    cursor: text;
    font-size: 75%;
    opacity: 1;
    -webkit-transition: all .2s;
            transition: all .2s;
    top: -.5em;
    left: 0.75rem;
    z-index: 3;
    line-height: 1;
    padding: 0 1px;
    // Disable selection for label
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .input-label-border label::after,
  .input-label-border > span::after {
    content: " ";
    display: block;
    position: absolute;
    background: white;
    height: 2px;
    top: 50%;
    left: -.2em;
    right: -.2em;
    z-index: -1;
  }
</style>
