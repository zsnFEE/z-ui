import Vue from "vue";
import "animate.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "./packages/components/button";
import Icon from "./packages/components/icon";
import Input from "./packages/components/input";
import InputNumber from "./packages/components/input-number";
import Radio from "./packages/components/radio";
import RadioGroup from "./packages/components/radio-group";
import Checkbox from "./packages/components/checkbox";
import CheckboxGroup from "./packages/components/checkbox-group";
import Message from "./packages/components/message";
import MessageBox from "./packages/components/messagebox";
import Modal from "./packages/components/modal";

Vue.config.productionTip = false;
Vue.use(Button)
  .use(Icon)
  .use(Input)
  .use(InputNumber)
  .use(Radio)
  .use(RadioGroup)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(MessageBox)
  .use(Message)
  .use(Modal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

