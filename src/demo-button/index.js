import DemoButton from './index.vue';

DemoButton.install = function (Vue) {
  Vue.component(DemoButton.name, DemoButton);
};

export default DemoButton;
