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
    path: "/cert",
    name: "cert",
    component: () => import("./pages/pay/certification"),
  },
  {
    path: "/payList",
    name: "payList",
    component: () => import("./pages/pay/list"),
  },
];

export default routes;
