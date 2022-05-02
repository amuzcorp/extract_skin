<template>
  <div class="my-sale-history-warp mb-100">
    <SalesHeader />

    <WithdrawBoard :boardTit="'출금내역'" :boardList="itemList" />
  </div>
</template>
<script>
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import WithdrawBoard from "@/components/board/withdrawBoard/list";

export default {
  name: "my-sale-history-skin",
  components: {
    SalesHeader,
    WithdrawBoard,
  },
  data() {
    return {
      itemList: [
        {
          value: false,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "요청중",
        },
        {
          value: false,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "요청중",
        },
        {
          value: true,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "완료",
        },
        {
          value: true,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "완료",
        },
        {
          value: true,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "완료",
        },
        {
          value: true,
          date: "2022-01-01",
          bank: "농협",
          bankNum: "878-02-425854",
          price: "₩ 25,000",
          amount: "₩ 5,000,000",
          withdraw: "₩ 2,800,000",
          state: "완료",
        },
      ],
    };
  },
};
</script>
<style></style>
