<template>
  <div>
    <z-button @click="showModal" type="primary">showModal</z-button>
  </div>
</template>
<script>
import Home from "./Home.vue";
export default {
  date() {
    return {};
  },
  methods: {
    showModal() {
      this.$modal({
        template: Home,
        params: {
          name: "我是外部的参数"
        }
      });
    }
  }
};
</script>
