<template>
  <div>
    <z-radio-group v-model="sex">
      <z-radio label="男人">男人</z-radio>
      <z-radio label="女人">女人</z-radio>
      <z-radio label="人妖">人妖</z-radio>
    </z-radio-group>

    <z-radio label="男人">男人</z-radio>
    <z-radio label="女人">女人</z-radio>
    <z-radio label="人妖">人妖</z-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sex: "男人"
    };
  }
};
</script>
