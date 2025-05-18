module.exports = {
  name: 'jj-comp-vue-template',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/jj-comp-vue-template/',
    },
  },
  site: {
    title: 'jj-comp-vue-template',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
