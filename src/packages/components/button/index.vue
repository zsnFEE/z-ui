<template>
  <button
    class="z-button"
    :class="styleClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon">
      <z-icon :name="icon"></z-icon>
    </span>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "z-button",
  props: {
    type: {
      type: String,
      default: "",
      validator: value => {
        return ["primary", "success", "warning", "danger"].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    styleClass() {
      return {
        [`z-button--${this.type}`]: this.type,
        "is-round": this.round,
        "is-disabled": this.disabled
      };
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss" scope>
@import "./style.scss";
</style>
