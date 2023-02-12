<template>
  <div class="inline-container">
    <template v-if="type == 'textarea'">
      <textarea
        class="z-textarea"
        v-bind="$attrs"
        v-on="MyListners"
        v-model="inputValue"
      >
      </textarea>
    </template>
    <template v-else>
      <div class="inline-container" :class="className">
        <div class="z-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="z-input-outer">
          <input
            :class="styleClass"
            type="text"
            class="z-input"
            :disabled="disabled"
            v-bind="$attrs"
            v-on="MyListners"
            v-model="inputValue"
          />
          <span
            class="z-input-clear"
            @click="clearText"
            v-if="clearable && inputValue"
          >
            <z-icon :name="'close_circle_line'"></z-icon>
          </span>
        </div>
        <div class="z-input-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "z-input",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator: value => {
        return ["text", "textarea"].includes(value);
      }
    },
    size: {
      type: String,
      default: "",
      validator: value => {
        return ["small", "medium", ""].includes(value);
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    center: { type: Boolean, default: false }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    MyListners() {
      return Object.assign(this.$listeners, {
        input: event => this.$emit("input", event.target.value)
      });
    },
    styleClass() {
      return {
        [`z-input--${this.size}`]: this.size,
        "is-disabled": this.disabled,
        "is-center": this.center
      };
    },
    className() {
      return {
        "has-prepend": this.$slots.prepend,
        "has-append": this.$slots.append
      };
    }
  },
  methods: {
    clearText() {
      this.inputValue = "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
