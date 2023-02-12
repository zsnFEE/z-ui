<template>
  <div class="mask">
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div class="modal-content" v-if="visible">
        <TempComponent @close="close"></TempComponent>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "z-modal",
  data() {
    return {
      visible: false
    };
  },
  components: {
    TempComponent: null
  },
  mounted() {
    this.createElement();
  },
  methods: {
    close() {
      this.visible = false;
    },
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    destoryElement() {
      this.$destroy();
    }
  },
  beforeDestroy() {
    this.$el.parentElement.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("animationend", this.destoryElement, false);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
