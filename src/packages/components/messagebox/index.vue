<template>
  <div class="mask">
    <transition name="message-fade">
      <div class="z-message-box" v-if="visible">
        <div class="z-message-box__header">
          {{ title }}
        </div>
        <div class="z-message-box__content">
          {{ content }}
        </div>
        <div class="z-message-box__footer">
          <template v-if="type === 'confirm'">
            <z-button size="small" @click="clickHandle('cancel')"
              >取消</z-button
            >
          </template>
          <z-button type="primary" size="small" @click="clickHandle('confirm')"
            >确定</z-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "z-messagebox",
  props: {
    title: {
      default: "温馨提示",
      type: String
    },
    content: {
      default: "",
      type: String
    },
    type: {
      default: "confirm",
      type: String
    },
    onOk: Function,
    onCancel: Function
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    this.createElement();
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },
  methods: {
    destroyElement() {
      this.$destroy();
    },
    clickHandle(type) {
      if (type == "cancel") {
        this.onCancel();
      } else {
        this.onOk();
      }
      this.close();
    },
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    close() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
