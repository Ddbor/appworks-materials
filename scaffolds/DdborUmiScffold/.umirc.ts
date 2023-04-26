import { defineConfig } from '.pnpm/registry.npmjs.org+umi@4.0.66_@babel+core@7.21.4_@types+react@18.2.0_eslint@8.35.0_postcss@8._tka5dlifk766qozo36lcpeifua/node_modules/umi';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
