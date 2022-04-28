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
        path: "show/:productName?",
        name: "productShow",
        component: () => import("./pages/product/show"),
      },
      {
        path: "create",
        name: "productCreate",
        component: () => import("./pages/product/create"),
      },
    ],
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("./pages/pay/index"),
    children: [
      {
        path: "cert",
        name: "cert",
        component: () => import("./pages/pay/certification"),
      },
      {
        path: "payList",
        name: "payList",
        component: () => import("./pages/pay/list"),
      },
      {
        path: "payCom",
        name: "payCom",
        component: () => import("./pages/pay/show"),
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
    path: "/purchase",
    name: "purchaseIndex",
    component: () => import("./pages/purchase/index"),
    children: [
      {
        path: "list",
        name: "purchaseList",
        component: () => import("./pages/purchase/list"),
      },
      {
        path: "show",
        name: "purchaseShow",
        component: () => import("./pages/purchase/show"),
      },
      {
        path: "create",
        name: "purchaseCreate",
        component: () => import("./pages/purchase/create"),
      },
    ],
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("./pages/user/login"),
  },
  {
    path: "/partner",
    name: "partnerIndex",
    component: () => import("./pages/partner/index"),
    children: [
      {
        path: "",
        name: "partnerHome",
        component: () => import("./pages/partner/home"),
      },
      {
        path: "join",
        name: "partnerList",
        component: () => import("./pages/partner/list"),
      },
      {
        path: "thank",
        name: "partnerShow",
        component: () => import("./pages/partner/show"),
      },
    ],
  },
  {
    path: "/profile",
    name: "profileIndex",
    component: () => import("./pages/partner/index"),
    children: [
      {
        path: "",
        name: "profileList",
        component: () => import("./pages/profile/list"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "myPageIndex",
    component: () => import("./pages/mypage/index"),
    children: [
      {
        path: "purchase",
        name: "MyPurchase",
        component: () => import("./pages/mypage/MyPurchase/purchase"),
      },
      {
        path: "announce",
        name: "MyAnnounce",
        component: () => import("./pages/mypage/MyPurchase/announce"),
      },
      {
        path: "list",
        name: "MyPurchaseList",
        component: () => import("./pages/mypage/MyPurchase/purchaseList"),
      },
      {
        path: "payment",
        name: "MyPayment",
        component: () => import("./pages/mypage/MyPurchase/payment"),
      },
      {
        path: "reviews",
        name: "MyReview",
        component: () => import("./pages/mypage/MyPurchase/review"),
      },
      {
        path: "like",
        name: "MyLikeList",
        component: () => import("./pages/mypage/MyPurchase/like-list"),
      },
      {
        path: "coupon",
        name: "MyCouponList",
        component: () => import("./pages/mypage/MyPurchase/coupon"),
      },
      {
        path: "partner",
        name: "MyPartner",
        component: () => import("./pages/mypage/MyPartner/partner"),
      },
    ],
  },
];

export default routes;
