<template>
  <div class="my-withdraw-warp mb-100">
    <SalesHeader />

    <WithdrawBoard :boardTit="'판매내역'" />
  </div>
</template>
<script>
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import WithdrawBoard from "@/components/board/withdrawBoard/list";

export default {
  name: "my-withdraw-skin",
  components: {
    SalesHeader,
    WithdrawBoard,
  },
};
</script>
<style></style>
