import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Button from "../views/Button.vue";
import Icon from "../views/Icon.vue";
import Input from "../views/Input.vue";
import Radio from "../views/Radio.vue";
import Checkbox from "../views/Checkbox.vue";
import Message from "../views/Message.vue";
import MessageBox from "../views/MessageBox.vue";
import Modal from "../views/Modal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon
  },
  {
    path: "/input",
    name: "Input",
    component: Input
  },
  {
    path: "/radio",
    name: "Radio",
    component: Radio
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox
  },
  {
    path: "/message",
    name: "Message",
    component: Message
  },
  {
    path: "/messageBox",
    name: "MessageBox",
    component: MessageBox
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

