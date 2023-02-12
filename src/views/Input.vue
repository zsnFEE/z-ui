<template>
  <div class="input">
    <z-input
      :size="'small'"
      placeholder="??"
      :value="msg"
      @input="data => (msg = data)"
    ></z-input>
    <z-input
      :size="'medium'"
      :value="msg"
      @input="data => (msg = data)"
      clearable
      center
    >
      <template slot="prepend">https://</template>
      <template slot="append">.com</template>
    </z-input>
    <z-input-number
      v-model="count"
      :step="0.2"
      :max="10"
      :min="1"
      :precision="2"
    ></z-input-number>
    {{ count }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
      msg: "Hello World"
    };
  }
};
</script>
<style>
.input {
  width: 400px;
  margin: 0 auto;
}
</style>
