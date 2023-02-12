<template>
  <div class="home">
    00000000
    <z-button @click="close" type="primary">关闭</z-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

