import DemoButton from './demo-button';

const components = [DemoButton];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.use(component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { DemoButton };

export default {
  install,
  version: '1.0.0',
};
