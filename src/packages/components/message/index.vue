<template>
  <transition name="message-fade">
    <div
      class="z-message"
      v-if="visible"
      :style="computedStyle"
      :class="computedClass"
    >
      <div class="z-message__content">
        我是消息
        <span class="close-btn" @click="close">
          <z-icon name="close_circle_line"></z-icon>
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "z-message",
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    postion: {
      type: String,
      default: "right"
    },
    type: {
      type: String,
      validator: value => {
        return ["success", "warning", "error", "info"].includes(value);
      }
    }
  },
  data() {
    return {
      verticalTop: 0,
      visible: false,
      baseOffset: 16
    };
  },
  mounted() {
    if (this.autoClose) {
      this.startTimer();
    }
    this.createElement();
  },
  methods: {
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
        timer = null;
      });
    },
    close() {
      this.visible = false;
    },
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    }
  },
  computed: {
    computedClass() {
      return {
        [`z-message--${this.type}`]: this.type
      };
    },
    computedStyle() {
      return {
        top: this.verticalTop + "px",
        ...(this.LR_POSITION && {
          [`${this.postion}`]: this.baseOffset + "px"
        }),
        ...(this.CENTER_POSITION && {
          left: "50%",
          "margin-left": "-190px"
        })
      };
    },
    LR_POSITION() {
      return this.postion == "left" || this.postion == "right";
    },
    CENTER_POSITION() {
      return this.postion == "center";
    }
  },
  beforeDestroy() {
    this.$el.parentElement.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", () => {
          this.$destroy();
        });
        this.$emit("close");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
