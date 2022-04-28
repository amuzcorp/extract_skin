<template>
  <div class="my-purchase-list-wrap mb-100">
    <MyPurchaseHeader />
    <MyBoard :boardList="boradList" :boardTit="'구매목록 및 재 다운로드'" />
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import MyBoard from "@/components/board/purchaseListBoard/list.vue";
import boradList from "@/api/board.json";

export default {
  name: "my-purchase-list-skin",
  components: {
    MyPurchaseHeader,
    MyBoard,
  },
  data() {
    return {
      boradList,
    };
  },
};
</script>
<style></style>
