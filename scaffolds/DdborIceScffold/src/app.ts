import { defineAppConfig } from 'ice';

// 应用配置 https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // 应用基础配置
  app: {
    /**
     * 根节点 id
     * 小程序端不支持修改 rootId
     */
    rootId: 'ice-container',
    /**
     * React 的严格模式 (React.StrictMode)
     * https://react.dev/reference/react/StrictMode
     */
    strict: true,
    // 是否启用内置的错误边界捕获能力
    errorBoundary: true,
  },

  /**
   * 路由配置
   * 小程序端不支持 router 配置
   * 关于小程序的 router 配置参考 https://v3.ice.work/docs/guide/miniapp/router
   */
  router: {
    /**
     * 路由类型
     * browser: 浏览器路由 https://reactrouter.com/en/main/router-components/browser-router
     * hash: 哈希路由 https://reactrouter.com/en/main/router-components/hash-router
     * memory: 内存路由 https://reactrouter.com/en/main/router-components/memory-router
     */
    type: 'browser',

    // 路由类型设置为 memory 时，需要渲染的路由
    // initialEntries: ['/'],
  },
}));
