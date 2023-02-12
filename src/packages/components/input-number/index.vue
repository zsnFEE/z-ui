<template>
  <div>
    <z-input
      v-model="inputValue"
      center
      :disabled="disabled"
      @change="handleChange"
    >
      <div
        class="cursor-pointer"
        slot="prepend"
        @click="handleClick('decrease')"
        :class="{ 'is-disabled': decreaseDisabled }"
      >
        <z-icon name="minus_circle_line"></z-icon>
      </div>
      <div
        class="cursor-pointer"
        slot="append"
        @click="handleClick('increase')"
        :class="{ 'is-disabled': increaseDisabled }"
      >
        <z-icon name="add_line"></z-icon>
      </div>
    </z-input>
  </div>
</template>
<script>
export default {
  name: "z-input-number",
  props: {
    value: {
      type: [Number, String]
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: +Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number
    }
  },
  data() {
    return {};
  },
  computed: {
    inputValue: {
      get() {
        return +this.value;
      },
      set(newValue) {
        let { max, min, inputValue } = this;
        let limit = [
          {
            validate: value => !this.isNumber(value),
            res: inputValue
          },
          {
            validate: value => value >= max,
            res: max
          },
          {
            validate: value => value <= min,
            res: min
          },
          {
            validate: () => true,
            res: newValue * 1
          }
        ];
        let _value = limit.find(v => v.validate(newValue)).res;
        console.log(_value.toFixed(this.precision));
        this.$emit("input", _value.toFixed(this.precision));
      }
    },
    decreaseDisabled() {
      return this.disabled || this.inputValue <= this.min;
    },
    increaseDisabled() {
      return this.disabled || this.inputValue >= this.max;
    }
  },
  methods: {
    handleClick(type) {
      if (type == "decrease") {
        if (this.decreaseDisabled) return;
        this.inputValue = Number(this.inputValue) - this.step;
      } else {
        if (this.increaseDisabled) return;
        this.inputValue = Number(this.inputValue) + this.step;
      }
    },
    isNumber(num) {
      return (
        !isNaN(+num) &&
        Object.prototype.toString.call(+num) == "[object Number]"
      );
    },
    handleChange() {
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
@import "./style.scss";
</style>
