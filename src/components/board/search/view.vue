<template>
  <div class="def-board-view">
    <div class="board-view-header">
      <BoardAd />
    </div>

    <div class="board-view-body"></div>
    <div class="board-view-footer"></div>
  </div>
</template>
<script>
import BoardAd from "@/components/ad/board-ad.vue";

export default {
  name: "search-view-skin",
  components: {
    BoardAd,
  },
};
</script>
<style></style>
