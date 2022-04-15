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
];

export default routes;
