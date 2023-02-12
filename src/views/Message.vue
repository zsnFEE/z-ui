<template>
  <div>
    <z-button @click="showMessage" type="primary" style="margin-left: 400px;"
      >click</z-button
    >
  </div>
</template>
<script>
export default {
  methods: {
    showMessage() {
      this.$message({
        message: "我是一个message",
        duration: 3000,
        autoClose: true,
        postion: "center",
        type: "error"
      });
    }
  }
};
</script>
