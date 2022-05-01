<template>
  <div class="my-prod-warp mb-100">
    <SalesHeader />

    <WithdrawBoard :boardTit="'내 상품'" />
  </div>
</template>
<script>
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import WithdrawBoard from "@/components/board/withdrawBoard/list";

export default {
  name: "my-product-skin",
  components: {
    SalesHeader,
    WithdrawBoard,
  },
};
</script>
<style></style>
