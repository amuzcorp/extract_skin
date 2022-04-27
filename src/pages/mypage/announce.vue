<template>
  <div class="my-announce-wrap mb-100">
    <MyPurchaseHeader />
    <MyBoard :boardList="boradList" :boardTit="'내 공고'" />
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import MyBoard from "@/components/board/announceBoard/list.vue";
import boradList from "@/api/board.json";

export default {
  name: "my-announce-skin",
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
