<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "z-radio-group",
  props: {
    value: {
      type: [String, Number]
    }
  },
  provide() {
    return {
      RadioGroup: this
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
