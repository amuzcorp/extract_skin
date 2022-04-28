<template>
  <div class="my-review-wrap mb-100">
    <MyPurchaseHeader />

    <MyBoard :boardList="reviewList" :boardTit="'리뷰작성'" />
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import MyBoard from "@/components/board/reviewBord/list.vue";
import reviewList from "@/api/review.json";

export default {
  name: "my-review-skin",
  components: {
    MyPurchaseHeader,
    MyBoard,
  },
  data() {
    return {
      reviewList,
    };
  },
};
</script>
<style></style>
