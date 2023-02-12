<template>
  <div>
    <z-button :type="'primary'" :disabled="true" :round="true">321</z-button>
    <z-button :type="'warning'" :round="true">321</z-button>
    <z-button :type="'success'">321</z-button>
    <z-button
      :icon="'arrow_left_line'"
      :type="'danger'"
      :disabled="true"
      :round="true"
      @click="ccc"
      >321</z-button
    >
  </div>
</template>
<script>
import ZButton from "../packages/components/button";
export default {
  components: {
    ZButton
  },
  methods: {
    ccc() {
      alert(1);
    }
  }
};
</script>
