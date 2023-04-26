# ice.js 3 Lite Scaffold

## 包管理工具

- [pnpm](https://pnpm.js.org/zh/)（推荐）
- [yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)
- [cnpm](https://www.npmjs.com/package/cnpm)

## 使用

```bash
$ pnpm install

$ pnpm start
```

## 目录结构

```md
.
├── README.md
├── ice.config.mts # 构建配置
├── package.json
├── .browserslistrc # 支持的浏览器
├── public
│   ├── favicon.ico  
├── src
│   ├── models # 全局状态
│   │   └── user.ts
│   ├── app.ts # 应用入口
│   ├── assets
│   │   └── logo.png
│   ├── document.tsx
│   ├── pages # 页面文件夹
│   │   ├── index.module.css
│   │   └── index.tsx # 页面入口
│   └── typings.d.ts
│   └── global.css # 全局样式
└── tsconfig.json
```

## 构建

```bash
# 测试环境构建
$ pnpm build:test

# 生产环境构建
$ pnpm build
```

## 详细文档

更多详细文档内容请查看： [ice docs](https://v3.ice.work/)

## 小程序

ice.js 支持小程序开发，需手动接入

详情请查看：[ice 小程序](https://v3.ice.work/docs/guide/miniapp/start)

## 微前端

ice.js 支持微前端开发，需手动接入

详情请查看：[ice 微前端](https://v3.ice.work/docs/guide/advanced/icestark)
