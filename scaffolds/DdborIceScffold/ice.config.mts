import { defineConfig } from '@ice/app';
import store from '@ice/plugin-store';

const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;

// 构建配置
// https://v3.ice.work/docs/guide/basic/config
export default defineConfig(() => ({
  /**
   * 路由配置，默认为约定式路由无需配置
   * 对于约定式路由不满足的场景，可以通过 defineRoutes 方式进行自定义
   * 路由文档： https://v3.ice.work/docs/guide/basic/router
   */
  // routes: {
  //   defineRoutes: (route) => {
  //     // 将 /hello 路由访问内容指定为 about.tsx
  //     route('/hello', 'about.tsx');
  //   },
  // },

  // 压缩产物，目前默认仅在 build 阶段生效
  minify,

  /**
   * 如果希望构建后的资源带 hash 版本，可以将 hash 设置为 true
   * 也可以设置为 contenthash 按文件内容生成 hash 值
   * 小程序端不支持该配置
   */
  hash: 'contenthash',

  /**
   * 配置 dev 开发阶段的代理功能
   * 小程序端不支持该配置
   */
  proxy: {
    '/api': {
      target: 'http://192.168.10.160:3000/',
      changeOrigin: true,
      secure: false,
      cookieDomainRewrite: '192.168.10.160',
      pathRewrite: { '^/api': '' },
    },
  },

  /**
   * 压缩代码时移除 console.* 相关代码
   * 比如配置了 log 则会移除 console.trace 、console.debug、console.log 代码
   */
  dropLogLevel: 'log',

  /**
   * SSR / SSG 产物标准，推荐以 ESM 标准进行执行
   * 类型：

    {
      format: 'esm' | 'cjs';
      bundle: boolean;
      ignores: IgnorePattern[];
      externals: string[];
      onDemand: boolean;
    }

    * format: 产物标准，支持 esm 和 cjs 两种标准
    * bundle: 是否将所有依赖打包到产物中
    * ignores: 忽略打包的依赖
    * externals: 外部依赖，不会被打包到产物中
    * onDemand: 是否按需加载产物

   */
  server: {
    onDemand: true,
    format: 'esm',
  },

  // TypeScript 类型检查
  tsChecker: false,

  /**
   * eslint
   * 配置说明：

      false：不检测 eslint 错误
      true：将 eslint 错误展示在预览页面上
      object: 仅 Webpack 模式支持，表现等同于 true，支持配置 eslint-webpack-plugin 的更多参数

   */
  eslint: false,

  // 添加插件
  plugins: [
    // 状态管理
    store({
      // 在单页应用下进行页面切换时，页面状态是会保留的。
      // 如果想切换页面后再次进入原页面时重新初始化页面状态，需要添加以下配置
      resetPageState: true,
    }),
  ],
}));
