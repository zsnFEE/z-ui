import Messagebox from "./index.vue";
export default {
  install(Vue) {
    function generateInstance(options) {
      const Ctor = Vue.extend(Messagebox);
      let instance = new Ctor({
        propsData: options
      }).$mount(document.createElement("div"));
      return instance;
    }
    Vue.prototype.$confirm = function(options) {
      generateInstance(options);
    };
    Vue.prototype.$alert = function(options) {
      generateInstance(
        Object.assign(options, {
          type: "alert"
        })
      );
    };
  }
};
