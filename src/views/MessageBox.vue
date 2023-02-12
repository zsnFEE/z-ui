<template>
  <div>
    <z-button @click="showMessagebox" type="primary">showMessagebox</z-button>
    <z-button @click="showAlert" type="primary">showAlert</z-button>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    showMessagebox() {
      this.$confirm({
        title: "Hello",
        content: "Wrold",
        onOk: () => {
          alert("onOk");
        },
        onCancel: () => {
          alert("onCancel");
        }
      });
    },
    showAlert() {
      this.$alert({
        title: "Hello",
        content: "Wrold"
      });
    }
  }
};
</script>
