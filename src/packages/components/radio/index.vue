<template>
  <label class="z-radio">
    <span class="z-radio--outer">
      <span class="z-radio--inner" :class="{ 'is-checked': isChecked }"></span>
      <input
        type="radio"
        :value="label"
        class="z-radio-native"
        v-model="radioValue"
      />
    </span>
    <span class="z-radiolabel">{{ label }}</span>
  </label>
</template>
<script>
export default {
  name: "z-radio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    isGroup() {
      return this.RadioGroup;
    },
    radioValue: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        if (this.isGroup) {
          this.RadioGroup.$emit("input", value);
        } else {
          this.$emit("input", value);
        }
      }
    },
    isChecked() {
      return this.radioValue == this.label;
    }
  }
};
</script>
<style scoped>
@import "./style.scss";
</style>
