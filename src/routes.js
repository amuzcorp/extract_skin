import home from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "homeSkin",
    component: home,
  },
  {
    path: "/product",
    name: "productIndex",
    component: () => import("./pages/product/index"),
    children: [
      {
        path: "list/:categoryId?",
        name: "productList",
        component: () => import("./pages/product/list"),
      },
      {
        path: "view/:productName?",
        name: "productView",
        component: () => import("./pages/product/view"),
      },
    ],
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("./pages/pay/index"),
    children: [
      {
        path: "/cert",
        name: "cert",
        component: () => import("./pages/pay/certification"),
      },
      {
        path: "/payList",
        name: "payList",
        component: () => import("./pages/pay/list"),
      },
      {
        path: "/payCom",
        name: "payCom",
        component: () => import("./pages/pay/view"),
      },
    ],
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/search/index"),
    children: [
      {
        path: "/nonSearch",
        name: "nonSearch",
        component: () => import("./pages/search/non-search"),
      },
      {
        path: "/searchList",
        name: "searchList",
        component: () => import("./pages/search/list"),
      },
      {
        path: "/searchNoticeList",
        name: "searchNoticeList",
        component: () => import("./pages/search/list-notice"),
      },
    ],
  },
  {
    path: "/purchaseNotice",
    name: "purchaseNotice",
    component: () => import("./pages/purchaseNotice/index"),
    children: [
      {
        path: "/purchaseNoticeList",
        name: "purchaseNoticeList",
        component: () => import("./pages/purchaseNotice/list"),
      },
      {
        path: "/purchaseNoticeView",
        name: "purchaseNoticeView",
        component: () => import("./pages/purchaseNotice/view"),
      },
    ],
  },
];

export default routes;
