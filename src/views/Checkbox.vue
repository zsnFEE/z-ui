<template>
  <div>
    <z-checkbox-group v-model="checked">
      <z-checkbox label="篮球"></z-checkbox>
      <z-checkbox label="足球"></z-checkbox>
      <z-checkbox label="羽毛球"></z-checkbox>
    </z-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: []
    };
  }
};
</script>
