<template>
  <div class="my-like-wrap mb-100">
    <MyPurchaseHeader />

    <!-- 마이페이지 찜목록 제품 12개 (더보기 클릭 시 추가)  -->
    <ProdLikeList :productList="prodList" />

    <div class="more-btn">
      <b-button>
        더 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          /></svg
      ></b-button>
    </div>
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import ProdLikeList from "@/components/product/PurchaseProductList.vue";
import prodList from "@/api/product.json";

export default {
  name: "my-like-skin",
  components: {
    MyPurchaseHeader,
    ProdLikeList,
  },
  data() {
    return {
      prodList,
    };
  },
};
</script>
<style>
.my-like-wrap .list-body,
.my-like-wrap .prod-list {
  margin-bottom: 0;
}
.more-btn {
  width: 100%;
  text-align: center;
}
.more-btn .btn {
  padding: 17px 68px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.more-btn .btn svg {
  margin-left: 6px;
  margin-bottom: 3px;
}
</style>
