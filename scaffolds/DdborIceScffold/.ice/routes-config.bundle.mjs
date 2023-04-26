// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, history, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";
import * as webModule1 from "@ice/runtime";
var Meta2;
var Title2;
var Links2;
var Scripts2;
var Data2;
var Main2;
if (import.meta.target === "web") {
  Meta2 = webModule1.Meta;
  Title2 = webModule1.Title;
  Links2 = webModule1.Links;
  Scripts2 = webModule1.Scripts;
  Data2 = webModule1.Data;
  Main2 = webModule1.Main;
}
function definePageConfig(pageConfig2) {
  if (typeof pageConfig2 !== "function") {
    return () => pageConfig2;
  } else {
    return pageConfig2;
  }
}

// src/pages/index.tsx
var pageConfig = definePageConfig(() => ({
  // 标题会显示在文档上，可以通过 title 属性来设置
  title: "\u9996\u9875 - ice.js 3"
}));

// .ice/routes-config.ts
var routes_config_default = {
  "index": pageConfig
};
export {
  routes_config_default as default
};
