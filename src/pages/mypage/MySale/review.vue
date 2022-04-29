<template>
  <div class="my-sale-review-warp mb-100">
    <SalesHeader />

    <WithdrawBoard :boardTit="'출금내역'" />
  </div>
</template>
<script>
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import WithdrawBoard from "@/components/board/withdrawBoard/list";

export default {
  name: "my-sale-review-skin",
  components: {
    SalesHeader,
    WithdrawBoard,
  },
};
</script>
<style></style>
