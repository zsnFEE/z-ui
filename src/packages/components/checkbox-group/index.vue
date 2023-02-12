<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "z-checkbox-group",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CKGroup: this
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
