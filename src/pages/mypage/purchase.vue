<template>
  <div class="my-purchase-wrap">
    <div class="recent-buy">
      <div class="recent-buy-header">
        <h2>최근 구매파일</h2>
        <a href="">
          전체보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
      <div class="recent-buy-body">
        <PurchaseRecentBoard :boardList="this.recentTableList" />
      </div>

      <div class="my-purchase-like">
        <div class="my-purchase-like-header">
          <h2>찜 목록</h2>
          <a href="">
            전체보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </div>
        <div class="my-purchase-like-body"></div>
      </div>
    </div>
  </div>
</template>
<script>
import PurchaseRecentBoard from "@/components/board/purchaseBoard/recentList.vue";
import tableList from "@/api/board.json";

export default {
  name: "purchaseInfo",
  components: {
    PurchaseRecentBoard,
  },
  data() {
    return {
      tableList,
      recentTableList: [],
    };
  },
  methods: {
    getTableList() {
      this.recentTableList = this.tableList.slice(1, 3);
    },
  },
  mounted() {
    this.getTableList();
  },
};
</script>
<style></style>
